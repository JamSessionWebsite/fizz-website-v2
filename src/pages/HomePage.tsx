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
                    src={'https://audio.fizztheband.com/images/9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d/fizz-logo-pop-label-transparent.png'}></Image>
            </div>
        </div>
    )
};

export default HomePage;