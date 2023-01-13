import dynamic from "next/dynamic";
import React from 'react';
import Head from "next/head";
import {BAND_WEBSITE_CONFIG} from "../band-config";
const ImageGallery = dynamic(() => import('../components/common/ImageGallery'));

const HomePage = () => {
    return (
        <div className={'full-width youtube-container'}>
            <Head>
                <title>{BAND_WEBSITE_CONFIG.mainTitle}</title>
                <link rel="stylesheet"
                      href="https://fonts.googleapis.com/css2?family=Pacifico"></link>
                <link rel="stylesheet"
                      href="https://fonts.googleapis.com/css2?family=Lobster"></link>
                <link rel="stylesheet"
                      href="https://fonts.googleapis.com/css2?family=Caveat"></link>
                <meta
                    name='description'
                    content='Welcome to the official website of Fizz, a pop/funk/indie band from Chicago.  Check out videos of our performances, view a list of our upcoming shows, and more!'></meta>
            </Head>
            <div className={'flex-row image-gallery-container'}>
                <ImageGallery
                    title={'Welcome to the Official Website of Fizz!'}
                    images={BAND_WEBSITE_CONFIG.photos}/>
            </div>
        </div>
    )
};

export default HomePage;