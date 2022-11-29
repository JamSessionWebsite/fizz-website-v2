import React, {Fragment, useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';
import {Carousel} from 'react-responsive-carousel';
import {Image as ImageAntd} from "antd";
import ImageGallery from "../components/common/ImageGallery";

const PATH = 'https://audio.fizztheband.com/images/fizz-website/';

const HomePage = () => {
    const pictures = [
        {src: `${PATH}mary-singing.jpeg`},
        {src: `${PATH}drumming.jpeg`},
        {src: `${PATH}bass-playing.jpeg`},
        {src: `${PATH}dj-smiles.jpeg`},
        {src: `${PATH}starry-patch.jpeg`},
        {src: `${PATH}trumpet.jpeg`},
        {src: `${PATH}drum-and-guitar.jpeg`},
        {src: `${PATH}horns.jpeg`},
        {src: `${PATH}focus-drum.jpeg`},
        {src: `${PATH}trombone-toot.jpeg`},
        {src: `${PATH}rhythm-section.jpeg`},
        {src: `${PATH}sax.jpeg`},
        {src: `${PATH}spencer-set-up-drums.jpeg`},
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