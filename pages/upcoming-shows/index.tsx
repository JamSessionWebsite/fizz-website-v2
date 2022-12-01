import React from 'react';
import {Card, List} from "antd";
import Head from "next/head";

const UpcomingShowsPage = () => {
    return (
        <div className={'upcoming-shows-container'}>
            <Head>
                <title>FIZZ: A Chicago Funk/Pop/Indie Band | Upcoming Shows</title>
                <meta
                    name='description'
                    content='View a list of all of the upcoming shows that FIZZ is going to be playing.  Many will be in the Chicago area although we are always open to travel with in reason!'/>
            </Head>
            <Card title={'Upcoming Shows'}>
                <List
                    locale={{emptyText: 'There are currently no upcoming shows. Check back soon!'}}
                    dataSource={[]}
                />
            </Card>
        </div>
    );
}

export default UpcomingShowsPage;