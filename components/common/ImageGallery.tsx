import React, {useEffect, useState} from 'react';
import {CaretLeftOutlined, CaretRightOutlined} from "@ant-design/icons";
import ImageNext from 'next/image';
import {Button, Card, Descriptions} from "antd";
import useBreakpoint from "use-breakpoint";

const BREAKPOINTS = {mobile: 0, tablet: 768, desktop: 1280}

const ImageGallery = ({images, title = ''}) => {
    const [imageDimensions, setImageDimensions] = useState({width: 1, height: 1});
    const {minWidth} = useBreakpoint(BREAKPOINTS)

    useEffect(() => {
        window.onresize = () => {
            setMaxWidth(window.innerWidth - 32);
        }
    }, [imageDimensions]);
    const [currentlyVisibleImageIndex, setCurrentlyVisibleImageIndex] = useState(0);
    const [maxWidth, setMaxWidth] = useState(0);

    useEffect(() => {
        onImageChange(images[currentlyVisibleImageIndex].src);
    }, [images, currentlyVisibleImageIndex]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextImage();
        }, 4000);
        return () => {
            clearInterval(intervalId);
        }
    }, [currentlyVisibleImageIndex]);

    function setHeightAndWidthOfImage() {
        // @ts-ignore
        setImageDimensions({height: this.height, width: this.width});
        if (typeof window !== 'undefined') {
            setMaxWidth(window.innerWidth);
        }
    }

    function onImageChange(imgPath) {
        let myImage = new Image();
        myImage.onload = setHeightAndWidthOfImage;
        myImage.src = imgPath;
    }

    const ratio = imageDimensions.width / imageDimensions.height;
    const isTallAspectRatio = ratio < 1;
    const containerWidth = minWidth === 0 ? maxWidth * 0.75 : maxWidth * 0.55;
    const containerHeight = containerWidth * (3 / 4);

    const previousImage = () => setCurrentlyVisibleImageIndex(
        currentlyVisibleImageIndex !== 0 ?
            currentlyVisibleImageIndex - 1 :
            images.length - 1
    );
    const nextImage = () => setCurrentlyVisibleImageIndex(prevValue =>
        prevValue !== images.length - 1 ?
            prevValue + 1 :
            0
    );
    let imageWidth, imageHeight;

    if (isTallAspectRatio) {
        imageHeight = containerHeight;
        imageWidth = imageHeight * ratio;
    } else {
        imageWidth = containerWidth;
        imageHeight = imageWidth / ratio
    }
    console.error(`Container Width: ${containerWidth};  Container Height: ${containerHeight}`);
    console.error(`Image Width: ${imageWidth};  Image Height: ${imageHeight}`);
    return (
        <Card title={title !== '' ? title : null}>
            <div className={'image-gallery-container'}>
                <div className={'display-image-container'}>
                    <div className={'display-image'}
                         style={{width: `${containerWidth}px`, height: `${containerHeight}px`}}>
                        <ImageNext
                            alt={images[currentlyVisibleImageIndex].description}
                            height={imageHeight}
                            width={imageWidth}
                            priority
                            src={images[currentlyVisibleImageIndex].src}
                        />
                    </div>
                    <Button
                        ghost
                        className={'change-image-button left-nav'}
                        onClick={previousImage}
                        icon={<CaretLeftOutlined/>}/>
                    <Button
                        ghost
                        className={'change-image-button right-nav'}
                        onClick={nextImage}
                        icon={<CaretRightOutlined/>}/>
                </div>
                <Card title={'Description'} style={{maxWidth: `${containerWidth}px`}}>
                    <div className={'image-description'}>
                        {images[currentlyVisibleImageIndex].description}
                    </div>
                </Card>
            </div>
        </Card>

    );
};

export default ImageGallery;