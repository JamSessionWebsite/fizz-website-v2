import React, {useEffect, useState} from 'react';
import Head from "next/head";
import {BAND_WEBSITE_CONFIG} from "../../band-config";
import Image from "next/image";
import useBreakpoint from "use-breakpoint";
import {BREAKPOINTS} from "../common/CollapsibleHeader";
// const ImageGallery = dynamic(() => import('../components/common/ImageGallery'));

const HomePage = () => {
    const {minWidth} = useBreakpoint(BREAKPOINTS, 'desktop');
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
                    content='Welcome to the official website of The Sips, a pop funk band from Chicago.  Check out videos of our performances, view a list of our upcoming shows, and more!'></meta>
            </Head>
            <div className={'flex-row full-width'}>
                <div className={'flex-column'}>
                    <Image
                        style={{zIndex: 200}}
                        width={248}
                        height={248}
                        src={'https://media.bandpractice.app/bands/9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d/bandFiles/images/FIZZ-Raining.jpg'}
                        alt={'raining album cover'}/>
                    <a href={'https://distrokid.com/hyperfollow/thesips1/raining'} target={'_blank'} style={{color: 'white', fontSize: '24px'}}>
                        Click Here to Presave Our Debut Single "Raining"
                    </a>
                </div>
            </div>
        </div>
    )
};

export default HomePage;