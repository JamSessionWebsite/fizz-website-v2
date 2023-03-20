import React, {useEffect, useState} from 'react';
import Head from "next/head";
import {useSelector} from "react-redux";
import {DateTimeUtil} from "@poshprincess/ui-commons";
import dynamic from "next/dynamic";
import {Show} from "../../interfaces/show";
import {BAND_WEBSITE_CONFIG} from "../../band-config";
import {BREAKPOINTS} from "../../components/common/CollapsibleHeader";
import useBreakpoint from "use-breakpoint";
import axios from "axios";

const Card = dynamic(() => import('antd').then((dep) => dep.Card));
const List = dynamic(() => import('antd').then((dep) => dep.List));
const Tag = dynamic(() => import('antd').then((dep) => dep.Tag));
const Divider = dynamic(() => import('antd').then((dep) => dep.Divider));
const FOURTEEN_DAYS_IN_MILLISECONDS = (24 * 60 * 60 * 1000) * 14;

const onSortShows = (a, b) => {
    const hasFirstShowPassed = a.startDateTimeEpoch < Date.now();
    const hasSecondShowPassed = b.startDateTimeEpoch < Date.now();
    if (hasFirstShowPassed && !hasSecondShowPassed) {
        return 1;
    }
    if (!hasFirstShowPassed && hasSecondShowPassed) {
        return -1;
    }
    if (!hasFirstShowPassed && !hasSecondShowPassed) {
        if (a.startDateTimeEpoch > b.startDateTimeEpoch) {
            return 1;
        }
        return 1;
    }
    return 0;
}

const bandName = BAND_WEBSITE_CONFIG.bandName;
const ticketEmailAddress = BAND_WEBSITE_CONFIG.contacts.find(x => x.id === 'tickets');
const finalTicketEmailAddress = ticketEmailAddress ? ticketEmailAddress.value : BAND_WEBSITE_CONFIG.primaryEmailAddress;
const showsPage = BAND_WEBSITE_CONFIG.pages.find(x => x.id === 'shows');
const eventLinkToUrl = showsPage ? `${BAND_WEBSITE_CONFIG.domain}/${showsPage.path}` : BAND_WEBSITE_CONFIG.domain;
const logoUrl = BAND_WEBSITE_CONFIG.logo.src;

const UpcomingShowsPage = () => {
    const {minWidth} = useBreakpoint(BREAKPOINTS, 'desktop');
    const [shows, setShows] = useState([]);
    useEffect(() => {
        axios
            .get(`https://api.fizz.band/website-info/${BAND_WEBSITE_CONFIG.bandId}/${BAND_WEBSITE_CONFIG.websiteId}`)
            .then(response => {
                setShows(response.data.body.websiteInfo.shows);
            })
    }, []);
    const richTextEvents = shows
        .filter(s => s.status.toLowerCase() !== 'hidden')
        .sort(onSortShows)
        .map(show => {
            const location = show.location;
            const ticketSaleStartDate = new Date();
            ticketSaleStartDate.setTime(ticketSaleStartDate.getTime() - FOURTEEN_DAYS_IN_MILLISECONDS);
            return {
                "@context": "https://schema.org",
                "@type": "Event",
                "name": show.name,
                "url": show.eventUrl ? show.eventUrl : eventLinkToUrl,
                "image": [
                    show.imageUrl ? show.imageUrl : logoUrl
                ],
                ...(show.name && show.eventUrl && show.endDateTimeEpoch ? {
                    "offers": {
                        "name": `Tickets for "${show.name}"`,
                        "url": show.eventUrl,
                        "priceCurrency": "USD",
                        "price": show.price > 0 ? (show.price * 100).toFixed(2) : 0,
                        "availability": "https://schema.org/InStock",
                        "validFrom": ticketSaleStartDate.toISOString(),
                        "validThrough": DateTimeUtil.fromEpochToDateTime(show.endDateTimeEpoch),
                    }
                } : {}),
                "location": {
                    "@context": "https://schema.org",
                    "name": location.name,
                    ...(location.address ? {'address': location.address} : {}),
                    "addressCountry": location.country,
                    "addressRegion": location.state,
                    "postalCode": location.zipCode,
                    "streetAddress": location.address,
                    "email": finalTicketEmailAddress,
                },
                "eventAttendanceMode": "OfflineEventAttendanceMode",
                "organizer": {
                    'name': bandName,
                    'url': eventLinkToUrl
                },
                "performer": bandName,
                "description": show.description,
                "eventStatus": 'EventScheduled',
                "startDate":show.startDateTimeEpoch > 0 ? DateTimeUtil.fromEpochToDateTime(Number(show.startDateTimeEpoch)) : new Date().toISOString(),
                "endDate": show.endDateTimeEpoch > 0 ? DateTimeUtil.fromEpochToDateTime(Number(show.endDateTimeEpoch)) : new Date().toISOString(),
            };
        })
    const richTextDataStructuresForGoogleSearch = [
        {
            "@context": "https://schema.org",
            "@type": "MusicGroup",
            "name": bandName,
            "url": BAND_WEBSITE_CONFIG.domain,
            "image": [
                "https://audio.fizz.band/images/fizz-website/horn-section-of-fizz-bookclub-chicago.jpg"
            ],
            "genre": "Funk Pop",
            "email": "booking@fizz.band",
            "logo": logoUrl
        },
        ...richTextEvents
    ];
    return (
        <div style={{padding: minWidth === 0 ? '16px' : '16px 128px'}} className={'upcoming-shows-container'}>
            <Head>
                <title>Shows | Fizz</title>
                <meta
                    name='description'
                    content='View a list of all of the upcoming shows that Fizz is going to be playing.  Many will be in the Chicago area although we are always open to travel with in reason!'/>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(richTextDataStructuresForGoogleSearch)
                    }}/>
            </Head>
            <Card title={'Shows'}>
                <List
                    locale={{emptyText: 'There are currently no upcoming shows. Check back soon!'}}
                    dataSource={shows.filter(s => s.status.toLowerCase() !== 'hidden')}
                    renderItem={(show: Show, index) => {
                        const showHasHappened = show.startDateTimeEpoch < Date.now();
                        return <>
                            <div className={'show-row'}>
                                <div>
                                    {show.name}
                                </div>
                                <div className={'flex-column'}>
                                    {DateTimeUtil.fromEpochToDateTime(Number(show.startDateTimeEpoch))}
                                    <Tag
                                        color={showHasHappened ? 'red' : 'green'}>{showHasHappened ? 'Already Happened' : 'Upcoming'}</Tag>
                                </div>
                                <div className={'flex-column'}>
                                    <div className={'flex-row'}>
                                        {show.ticketPrice && show.ticketPrice > 0 ?
                                            <>
                                                <div>
                                                    Price:
                                                </div>
                                                <div className={'value'}>
                                                    ${(show.ticketPrice / 100).toFixed(2)}
                                                </div>
                                            </> :
                                            <></>
                                        }
                                    </div>
                                    {show.eventUrl && <>
                                        <a
                                            target={'_blank'}
                                            href={show.eventUrl}>Tickets</a>
                                    </>
                                    }
                                </div>
                            </div>
                            {index + 1 !== shows.length && <Divider/>}
                        </>
                    }}
                />
            </Card>
        </div>
    );
}

export default UpcomingShowsPage;