import React from 'react';
import {Card, List, Tag} from "antd";
import Head from "next/head";
import {useSelector} from "react-redux";
import {DateTimeUtil} from "@poshprincess/ui-commons";

interface Show {
    name: string;
    description: string;
    startDateTimeEpoch: number;
    endDateTimeEpoch: number;
    eventUrl?: string;
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
            return {
                "@context": "https://schema.org",
                "@type": "Event",
                "name": show.name,
                "url": show.eventUrl ? show.eventUrl : 'https://fizztheband.com/upcoming-shows',
                "image": [
                    show.imageUrl ? show.imageUrl : 'https://audio.fizztheband.com/images/fizz-website/fizz-website-logo.png'
                ],
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
                    renderItem={(show) => {
                        const showHasHappened = show.startDateTimeEpoch < Date.now();
                        return <div className={'flex-row full-width space-between'}>
                            <div>
                                {show.name}
                            </div>
                            <div>
                                {DateTimeUtil.fromEpochToDateTime(show.startDateTimeEpoch)}
                            </div>
                            <div>
                                <Tag color={showHasHappened ? 'red' : 'green'}>{showHasHappened ? 'Passed' : 'Upcoming'}</Tag>
                            </div>
                        </div>;
                    }}
                />
            </Card>
        </div>
    );
}

export default UpcomingShowsPage;