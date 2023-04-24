import dynamic from "next/dynamic";
import React, {useEffect} from 'react';
import Head from "next/head";
import {BAND_WEBSITE_CONFIG} from "../band-config";
import {useRouter} from "next/router";
// const ImageGallery = dynamic(() => import('../components/common/ImageGallery'));

const HomePage = () => {
    const router = useRouter();
    useEffect(() => {
            if(router) {
                router.push('/about-us').then();
            }
    }, [router]);

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
                {/*<ImageGallery*/}
                {/*    title={'Welcome to the Official Website of Fizz!'}*/}
                {/*    images={BAND_WEBSITE_CONFIG.photos}/>*/}
                {/*<h2>Here is a sneak peak of one song that we have been working on!</h2>*/}
                {/*<audio controls={true}>*/}
                {/*    <source src={'https://media.bandpractice.app/bands/9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d/songs/31982411-271f-487d-8fbe-5faa7100399c/audioRecordings/hey-mama-041123.m4a'}/>*/}
                {/*</audio>*/}
            </div>
        </div>
    )
};

export default HomePage;