import React, {useEffect, useState} from 'react';
import {CaretLeftOutlined, CaretRightOutlined} from "@ant-design/icons";
import ImageNext from 'next/image';
import {Button, Card} from "antd";
import useBreakpoint from "use-breakpoint";

const BREAKPOINTS = {mobile: 0, tablet: 768, desktop: 1280}

const ImageGallery = ({images, title = ''}) => {
    const [imageDimensions, setImageDimensions] = useState({width: 1, height: 1});
    const [topPixel, setTopPixel] = useState(48);
    const {minWidth} = useBreakpoint(BREAKPOINTS)

    const getMaxWidth = (ratio) => {
        if (minWidth === 0) {
            return 264;
        }
        if (ratio < 1) {
            return 296;
        }
        return 600;
    }

    useEffect(() => {
        window.onresize = () => {
            setMaxWidth(getMaxWidth(imageDimensions.width / imageDimensions.height));
        }
    }, [imageDimensions]);
    const [visible, setVisible] = useState(false);
    const [currentlyVisibleImageIndex, setCurrentlyVisibleImageIndex] = useState(0);
    const [maxWidth, setMaxWidth] = useState(0);

    useEffect(() => {
        onImageChange(images[currentlyVisibleImageIndex].src);
    }, [images, currentlyVisibleImageIndex]);

    useEffect(() => {
        setTopPixel(getTopPixel());
    }, [imageDimensions]);

    function setHeightAndWidthOfImage() {
        // @ts-ignore
        setImageDimensions({height: this.height, width: this.width});
        // @ts-ignore
        setMaxWidth(getMaxWidth(this.width / this.height));
    }

    function onImageChange(imgPath) {
        let myImage = new Image();
        myImage.onload = setHeightAndWidthOfImage;
        myImage.src = imgPath;
    }

    const calculatedHeight = maxWidth / (imageDimensions.width / imageDimensions.height);
    const height = calculatedHeight;
    const getTopPixel = () => {
        const ratio = imageDimensions.width / imageDimensions.height;
        if (minWidth === 0) {
            if (ratio < 1) {
                return calculatedHeight - 52;
            }
            return calculatedHeight + 48;
        }
        if (ratio < 1) {
            return calculatedHeight - 64;
        }
        return calculatedHeight - 16;
    }
    return (
        <Card title={title !== '' ? title : null}>
            <div className={'image-gallery-container'}>
                <div className={'display-image-container'}>
                    <div className={'display-image'}>
                        <ImageNext
                            alt={images[currentlyVisibleImageIndex].description}
                            width={maxWidth}
                            height={height}
                            priority
                            src={images[currentlyVisibleImageIndex].src}
                            onClick={() => setVisible(true)}
                        />
                    </div>
                    <div style={{top: `${topPixel}px`}}
                         className={'image-description'}>
                        {images[currentlyVisibleImageIndex].description}
                    </div>
                </div>
                <div className={'navigation-buttons'}>
                    <div className={'button-container'}>
                        <Button
                            ghost
                            className={'change-image-button'}
                            onClick={() => setCurrentlyVisibleImageIndex(
                                currentlyVisibleImageIndex !== 0 ?
                                    currentlyVisibleImageIndex - 1 :
                                    images.length - 1
                            )}
                            icon={<CaretLeftOutlined/>}/>
                    </div>
                    <div className={'button-container'}>
                        <Button
                            ghost
                            className={'change-image-button'}
                            onClick={() => setCurrentlyVisibleImageIndex(
                                currentlyVisibleImageIndex !== images.length - 1 ?
                                    currentlyVisibleImageIndex + 1 :
                                    0
                            )}
                            icon={<CaretRightOutlined/>}/>
                    </div>
                </div>
            </div>
        </Card>

    );
};

export default ImageGallery;