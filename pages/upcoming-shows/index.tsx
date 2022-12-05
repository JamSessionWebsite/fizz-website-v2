import React from 'react';
import {Card, List} from "antd";
import Head from "next/head";
import {useSelector} from "react-redux";

interface Show {
    name: string;
    startDateTimeEpoch: number;
    endDateTimeEpoch: number;
    eventUrl: string;
    location: {
        name: string;
        address: string;
        address2?: string;
        city: string;
        state?: string;
        zipCode?: number;
        zipCode2?: number;
        country: string;
    }
}

const UpcomingShowsPage = () => {
    const windowWidth = useSelector((state: {app: any}) => state.app.windowWidth);
    const shows: Show[] = [];
    return (
        <div style={{padding: windowWidth <= 760 ? '16px' : '16px 128px'}} className={'upcoming-shows-container'}>
            <Head>
                <title>Upcoming Shows | FIZZ</title>
                <meta
                    name='description'
                    content='View a list of all of the upcoming shows that FIZZ is going to be playing.  Many will be in the Chicago area although we are always open to travel with in reason!'/>
            </Head>
            <Card title={'Upcoming Shows'}>
                <List
                    locale={{emptyText: 'There are currently no upcoming shows. Check back soon!'}}
                    dataSource={shows}
                />
            </Card>
        </div>
    );
}

export default UpcomingShowsPage;