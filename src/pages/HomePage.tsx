import React from 'react';
import {Image, Typography} from "antd";

const {Title, Text} = Typography;

const HomePage = () => {
    return (
        <div className={'home-page-background'}>
            <div className={'flex-row full-width header-row'}>
                <Image
                    preview={false}
                    width={'30%'}
                    src={'https://audio.fizztheband.com/images/9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d/fizz-logo-pop-label-transparent.png'}/>
            </div>
            <div className={'flex-row full-width main-content-row'}>
                <Text
                    style={{fontSize: '32px'}}
                    className={'white-text'}>Hi! We are a funky pop band from Chicago called FIZZ.  Our website is in the process of being built so please check back soon for more content!</Text>
            </div>
        </div>
    )
};

export default HomePage;