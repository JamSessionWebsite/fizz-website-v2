import React from 'react';
import Head from "next/head";
import {useSelector} from "react-redux";
import {DateTimeUtil} from "@poshprincess/ui-commons";
import dynamic from "next/dynamic";
const Card = dynamic(() => import('antd').then((dep) => dep.Card));
const List = dynamic(() => import('antd').then((dep) => dep.List));
const Tag = dynamic(() => import('antd').then((dep) => dep.Tag));
const Divider = dynamic(() => import('antd').then((dep) => dep.Divider));

interface Show {
    name: string;
    description: string;
    startDateTimeEpoch: number;
    endDateTimeEpoch: number;
    eventUrl?: string;
    ticketPrice?: number;
    imageUrl?: string;
    location: {
        name: string;
        address?: string;
        address2?: string;
        city?: string;
        state?: string;
        zipCode: number;
        zipCode2?: number;
        country: string;
    }
}

const UpcomingShowsPage = () => {
    const windowWidth = useSelector((state: { app: any }) => state.app.windowWidth);
    const shows: Show[] = [
        {
            name: 'Sun Queen feat. Diet FIZZ at Uncommon Ground',
            description: 'Diet FIZZ, a subset of FIZZ, is performing live at Uncommon Ground in Chicago, Illinois!',
            startDateTimeEpoch: 1671237000000,
            endDateTimeEpoch: 1671247800000,
            eventUrl: 'https://www.simpletix.com/e/sun-queen-ft-fizz-with-guy-zensai-susanna-tickets-121166',
            ticketPrice: 1000,
            location: {
                name: 'Uncommon Ground',
                address: '3800 N CLARK ST',
                zipCode: 60613,
                city: 'Chicago',
                state: 'Illinois',
                country: 'USA',
            }
        },
        {
            name: 'FIZZ at Bookclub Chicago',
            description: 'FIZZ plays a show alongside Morgan Buckley, Sun Queen, and Susie McCollum',
            startDateTimeEpoch: 1668819600000,
            endDateTimeEpoch: 1668835800000,
            location: {
                name: 'Bookclub Chicago',
                address: 'Email tickets@fizztheband.com for address',
                zipCode: 60640,
                city: 'Chicago',
                state: 'Illinois',
                country: 'USA',
            }
        }
    ];
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
    const richTextEvents = shows
        .sort(onSortShows)
        .map(show => {
            const location = show.location;
            const dateOffset = (24*60*60*1000) * 14;
            const ticketSaleStartDate = new Date();
            ticketSaleStartDate.setTime(ticketSaleStartDate.getTime() - dateOffset);
            return {
                "@context": "https://schema.org",
                "@type": "Event",
                "name": show.name,
                "url": show.eventUrl ? show.eventUrl : 'https://fizztheband.com/upcoming-shows',
                "image": [
                    show.imageUrl ? show.imageUrl : 'https://audio.fizztheband.com/images/fizz-website/fizz-website-logo.png'
                ],
                ...(show.name && show.eventUrl && show.endDateTimeEpoch ? {
                    "offers": {
                        "name": `Tickets for "${show.name}"`,
                        "url": show.eventUrl,
                        "priceCurrency": "USD",
                        "price": "10.00",
                        "availability": "https://schema.org/InStock",
                        "validFrom": ticketSaleStartDate.toISOString(),
                        "validThrough": new Date(show.endDateTimeEpoch).toISOString(),
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
                    "email": "tickets@fizztheband.com",
                },
                "eventAttendanceMode": "OfflineEventAttendanceMode",
                "organizer": {
                    'name': "FIZZ",
                    'url': 'https://fizztheband.com/upcoming-shows'
                },
                "performer": "FIZZ",
                "description": show.description,
                "eventStatus": 'EventScheduled',
                "startDate": new Date(show.startDateTimeEpoch).toISOString(),
                "endDate": new Date(show.endDateTimeEpoch).toISOString(),
            };
        })
    const richTextDataStructuresForGoogleSearch = [
        {
            "@context": "https://schema.org",
            "@type": "MusicGroup",
            "name": "FIZZ",
            "url": "https://fizztheband.com/",
            "image": [
                "https://audio.fizztheband.com/images/fizz-website/horn-section-of-fizz-bookclub-chicago.jpg"
            ],
            "genre": "Pop/Funk/Indie",
            "email": "booking@fizztheband.com",
            "logo": "https://audio.fizztheband.com/images/fizz-website/fizz-website-ico.png"
        },
        ...richTextEvents
    ];
    return (
        <div style={{padding: windowWidth <= 760 ? '16px' : '16px 128px'}} className={'upcoming-shows-container'}>
            <Head>
                <title>Shows | FIZZ</title>
                <meta
                    name='description'
                    content='View a list of all of the upcoming shows that FIZZ is going to be playing.  Many will be in the Chicago area although we are always open to travel with in reason!'/>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(richTextDataStructuresForGoogleSearch)
                    }}/>
            </Head>
            <Card title={'Shows'}>
                <List
                    locale={{emptyText: 'There are currently no upcoming shows. Check back soon!'}}
                    dataSource={shows}
                    renderItem={(show: Show, index) => {
                        const showHasHappened = show.startDateTimeEpoch < Date.now();
                        return <>
                            <div className={'show-row'}>
                                <div>
                                    {show.name}
                                </div>
                                <div className={'flex-column'}>
                                    {DateTimeUtil.fromEpochToDateTime(show.startDateTimeEpoch)}
                                    <Tag
                                        color={showHasHappened ? 'red' : 'green'}>{showHasHappened ? 'Already Happened' : 'Upcoming'}</Tag>
                                </div>
                                <div className={'flex-column'}>
                                    <div className={'flex-row'}>
                                        {show.ticketPrice || show.ticketPrice === 0 ?
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
                                    {show.eventUrl && !showHasHappened && <>
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