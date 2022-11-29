import React, {Fragment, useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';
import {Carousel} from 'react-responsive-carousel';
import {Image as ImageAntd} from "antd";
import ImageGallery from "../components/common/ImageGallery";

const PATH = 'https://audio.fizztheband.com/images/fizz-website/';

const HomePage = () => {
    const pictures = [
        {description: 'Mary aka Sun Queen singing at Bookclub Chicago in late 2022.', src: `${PATH}mary-singing.jpeg`},
        {description: 'Spencer, drummer of FIZZ, playing at Bookclub Chicago.', src: `${PATH}drumming.jpeg`},
        {description: 'Alec, bassist of FIZZ, playing his Fender Jazz Bass at Bookclub Chicago.', src: `${PATH}bass-playing.jpeg`},
        {description: 'DJ, trombone player of FIZZ, smiles as he waits to play his horn.', src: `${PATH}dj-smiles.jpeg`},
        {description: 'Patrick, guitarist of FIZZ, playing Disco Ulysses by Vulfpeck at Bookclub Chicago.', src: `${PATH}starry-patch.jpeg`},
        {description: 'Sam, trumpet player of FIZZ, takes a solo.', src: `${PATH}trumpet.jpeg`},
        {description: 'Close up of the drums and rhythm guitar locking in.', src: `${PATH}drum-and-guitar.jpeg`},
        {description: 'Full horn section plays in unison to a funky pop song.', src: `${PATH}horns.jpeg`},
        {description: 'Close up of the drummer of FIZZ playing at Bookclub Chicago.', src: `${PATH}focus-drum.jpeg`},
        {description: 'A close up of the trombone taking a solo.', src: `${PATH}trombone-toot.jpeg`},
        {description: 'The rhythm section of FIZZ playing a cover of Disco Ulysses by Vulfpeck.', src: `${PATH}rhythm-section.jpeg`},
        {description: 'Ethan, saxophone player of FIZZ, taking a solo at Bookclub Chicago.', src: `${PATH}sax.jpeg`},
        {description: 'Setting up before the gig at Bookclub Chicago in late 2022.', src: `${PATH}spencer-set-up-drums.jpeg`},
    ];

    return (
        <div className={'full-width youtube-container'}>
            <Helmet>
                <title>FIZZ - Home</title>
                <meta
                    name='description'
                    content='Welcome to the official website of FIZZ, a pop/funk/indie band from Chicago!'></meta>
            </Helmet>
            <div className={'flex-row'}>
                <ImageGallery images={pictures}/>
            </div>
        </div>
    )
};

export default HomePage;