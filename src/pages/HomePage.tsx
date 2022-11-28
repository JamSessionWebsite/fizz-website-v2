import React from 'react';
import YouTube from "react-youtube";
import {Helmet} from 'react-helmet';

const HomePage = () => {
    return (
        <div className={'full-width youtube-container'}>
            <Helmet>
                <title>FIZZ - Home</title>
                <meta
                    name='description'
                    content='Welcome to the official website of FIZZ, a pop/funk/indie band from Chicago!'></meta>
            </Helmet>
            <YouTube
                videoId={'Po3-1mDTm7I'}
                opts={{width: '296', height: '394'}}
            ></YouTube>
        </div>
    )
};

export default HomePage;