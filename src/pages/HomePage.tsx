import React from 'react';
import {Helmet} from 'react-helmet';
import {Carousel} from 'react-responsive-carousel';
import {Image} from "antd";

const PATH = 'https://audio.fizztheband.com/images/fizz-website/';
const contentStyle: React.CSSProperties = {
    margin: 0,
    color: '#fff',
    height: '400px',
    textAlign: 'center',
    background: '#364d79',
};
const HomePage = () => {
    const pictures = [
        {src: `${PATH}bass-playing.jpeg`},
        {src: `${PATH}dj-smiles.jpeg`},
        {src: `${PATH}drum-and-guitar.jpeg`},
        {src: `${PATH}drumming.jpeg`},
        {src: `${PATH}focus-drum.jpeg`},
        {src: `${PATH}horns.jpeg`},
        {src: `${PATH}mary-singing.jpeg`},
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
            <div className={'carousel-container'}>
                <Image.PreviewGroup>
                    <Carousel showArrows showThumbs={false}>
                        {pictures.map(pic => {
                            return (
                                <Image style={contentStyle} src={pic.src}/>
                            )
                        })}
                    </Carousel>
                </Image.PreviewGroup>
            </div>
        </div>
    )
};

export default HomePage;