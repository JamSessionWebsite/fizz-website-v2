import dynamic from "next/dynamic";
import React from 'react';
import Head from "next/head";
import {BAND_CONFIG} from "../band-config";
const ImageGallery = dynamic(() => import("../components/common/ImageGallery"));

const PATH = 'https://audio.fizztheband.com/images/fizz-website/';

const HomePage = () => {
    const pictures = [
        {
            description: 'FIZZ performs "Something Cosmic" written by Sun Queen (feat. FIZZ) at Bookclub Chicago.',
            src: `${PATH}fizz-performs-something-cosmic.jpg`
        },
        {
            description: 'Morgan Buckley, one of the lead singers of FIZZ, singing at Bookclub Chicago in late 2022.',
            src: `${PATH}morgan-buckley-close-up.jpg`
        },
        {
            description: 'Mary aka Sun Queen, one of the lead singers of FIZZ, singing at Bookclub Chicago in late 2022.',
            src: `${PATH}sun-queen-plays-something-cosmic.jpg`
        },
        {description: 'Spencer, drummer of FIZZ, playing at Bookclub Chicago.', src: `${PATH}drums-playing-live.jpg`},
        {
            description: 'Alec, bassist of FIZZ, playing his Fender Jazz Bass at Bookclub Chicago.',
            src: `${PATH}bass-playing-live-fizz.jpg`
        },
        {
            description: 'Patrick, guitarist of FIZZ, playing Disco Ulysses by Vulfpeck at Bookclub Chicago.',
            src: `${PATH}guitar-playing-live.jpg`
        },
        {description: 'Sam, trumpet player of FIZZ, takes a solo.', src: `${PATH}trumpet-solo-live.jpg`},
        {description: 'Close up of the drums and rhythm guitar locking in.', src: `${PATH}drums-and-guitar.jpg`},
        {
            description: 'Full horn section plays in unison to a funky pop song.',
            src: `${PATH}horn-section-of-fizz-bookclub-chicago.jpg`
        },
        {
            description: 'Close up of the drummer of FIZZ playing at Bookclub Chicago.',
            src: `${PATH}close-up-drummer-of-fizz.jpg`
        },
        {
            description: 'A close up of DJ, the trombone player of FIZZ, taking a solo.',
            src: `${PATH}trombone-solo-live.jpg`
        },
        {
            description: 'The rhythm section of FIZZ playing a cover of Disco Ulysses by Vulfpeck.',
            src: `${PATH}fizz-rhythm-section-live.jpg`
        },
        {
            description: 'Ethan, saxophone player of FIZZ, taking a solo at Bookclub Chicago.',
            src: `${PATH}sax-solo-live.jpg`
        },
        {
            description: 'Setting up before the gig at Bookclub Chicago in late 2022.',
            src: `${PATH}gig-setup-for-fizz.jpg`
        },
    ];

    return (
        <div className={'full-width youtube-container'}>
            <Head>
                <title>{BAND_CONFIG.mainTitle}</title>
                <meta
                    name='description'
                    content='Welcome to the official website of FIZZ, a pop/funk/indie band from Chicago.  Check out videos of our performances, view a list of our upcoming shows, and more!'></meta>
            </Head>
            <div className={'flex-row image-gallery-container'}>
                <ImageGallery
                    title={'FIZZ Image Gallery'}
                    images={pictures}/>
            </div>
        </div>
    )
};

export default HomePage;