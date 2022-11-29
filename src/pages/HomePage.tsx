import React, {Fragment, useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';
import {Carousel} from 'react-responsive-carousel';
import {Image as ImageAntd} from "antd";
import ImageGallery from "../components/common/ImageGallery";

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
    useEffect(() => {
        onImageChange(pictures[0].src);
    }, []);

    function setHeightAndWidthOfImage() {
        setImageDimensions({height: this.height, width: this.width});
    }

    function onImageChange(imgPath) {
        let myImage = new Image();
        myImage.onload = setHeightAndWidthOfImage;
        myImage.src = imgPath;
    }

    const maxWidth = 264;
    const ratio = imageDimensions.width / imageDimensions.height;
    const height = `${maxWidth / ratio}px`;
    const contentStyle: React.CSSProperties = {
        margin: 0,
        color: '#fff',
        width: `${maxWidth}px`,
        height,
        maxWidth: `${maxWidth}px`,
        maxHeight: height,
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
            {imageDimensions.width !== 0 ?
                <div className={'flex-row'}>
                    <ImageGallery images={pictures} />
                </div> :
            <Fragment />}
        </div>
    )
};

export default HomePage;