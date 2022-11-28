import React, {useEffect} from 'react';
import {Card, List} from "antd";
import {Helmet} from 'react-helmet';

const UpcomingShowsPage = () => {
    return (
        <div className={'upcoming-shows-container'}>
            <Helmet>
                <title>FIZZ - Upcoming Shows</title>
                <meta
                    name='description'
                    content='All of the upcoming shows for FIZZ are listed here. FIZZ is a pop/funk/indie band with horns, rhythm, vocals, and more!'/>
            </Helmet>
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