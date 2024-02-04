import React, {useEffect, useState} from 'react';
import Head from "next/head";
import {BAND_WEBSITE_CONFIG} from "../../band-config";
import Image from "next/image";
import useBreakpoint from "use-breakpoint";
import {BREAKPOINTS} from "../common/CollapsibleHeader";
import RainingMusicVideoYoutube from "../RainingMusicVideoYoutube";
import TheSipsSpotifyArtist from "../TheSipsSpotifyArtist";
// const ImageGallery = dynamic(() => import('../components/common/ImageGallery'));

const HomePage = () => {
    const {minWidth} = useBreakpoint(BREAKPOINTS, 'desktop');
    return (
        <div className={''}>
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
                    content='Welcome to the official website of The Sips, a pop funk band from Chicago.  Check out videos of our performances, view a list of our upcoming shows, and more!'></meta>
            </Head>
            <div className={'flex-row full-width'}>
                <RainingMusicVideoYoutube />
            </div>
            <div className={'flex-row full-width'}>
                <TheSipsSpotifyArtist />
            </div>
        </div>
    )
};

export default HomePage;