import React, {useState} from 'react';
import {Helmet} from 'react-helmet';
import {Carousel} from 'react-responsive-carousel';
import {Image as ImageAntd} from "antd";

const PATH = 'https://audio.fizztheband.com/images/fizz-website/';

const HomePage = () => {
    const [imageDimensions, setImageDimensions] = useState({width: 0, height: 0});
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

    function setHeightAndWidthOfImage() {
        setImageDimensions({height: this.height, width: this.width});
    }

    function onImageChange(imgPath) {
        let myImage = new Image();
        myImage.onload = setHeightAndWidthOfImage;
        myImage.src = imgPath;
    }

    const maxHeight = 400;
    const width = `${(imageDimensions.width / imageDimensions.height) * maxHeight}px`;
    const contentStyle: React.CSSProperties = {
        margin: 0,
        color: '#fff',
        height: `${maxHeight}px`,
        width,
        maxHeight: `${maxHeight}px`,
        maxWidth: width,
        textAlign: 'center',
        background: '#364d79',
    };
    return (
        <div className={'full-width youtube-container'}>
            <Helmet>
                <title>FIZZ - Home</title>
                <meta
                    name='description'
                    content='Welcome to the official website of FIZZ, a pop/funk/indie band from Chicago!'></meta>
            </Helmet>
            <div className={'carousel-container'}>
                <Carousel
                    autoPlay
                    showArrows
                    showThumbs={false}
                    dynamicHeight
                    interval={4000}
                    infiniteLoop
                    onChange={(event, node) => {
                        onImageChange(pictures[event].src);
                    }}
                >
                    {pictures.map(pic => {
                        return (
                            <ImageAntd style={contentStyle} src={pic.src}/>
                        )
                    })}
                </Carousel>
            </div>
        </div>
    )
};

export default HomePage;