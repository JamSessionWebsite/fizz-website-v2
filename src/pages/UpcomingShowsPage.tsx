import React from 'react';
import {Card, List} from "antd";

const UpcomingShowsPage = () => {
    return (
        <div className={'upcoming-shows-container'}>
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