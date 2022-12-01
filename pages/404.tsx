import React from 'react';
import {Card} from "antd";

const NotFound = () => {
    return (
        <div className={'not-found-container'}>
            <Card title={'Woah! Looks like you ended up at a dead end.'}>
                Please click on the soda pop FIZZ logo to return back to the home page or use one of the buttons above to
                navigate back to another valid page!
            </Card>
        </div>
    )
}

export default NotFound;