import React, {useEffect, useState} from 'react';
import {Button, Card, Typography} from "antd";
import {CaretLeftOutlined, CaretRightOutlined} from "@ant-design/icons";
import ImageNext from 'next/image';

const {Text} = Typography;

const ImageGallery = ({images, title = null}) => {
    const [imageDimensions, setImageDimensions] = useState({width: 1, height: 1});

    function getBrowserWidth() {
        if (typeof window !== 'undefined') {
            return window.innerWidth;
        }
        return 760;
    }

    const getMaxWidth = (ratio) => {
        if (getBrowserWidth() <= 760) {
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

    function setHeightAndWidthOfImage() {
        setImageDimensions({height: this.height, width: this.width});
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
        if (getBrowserWidth() <= 760) {
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
        <Card title={title ? title : null}>
            <div className={'flex-row full-width'}>
                <Text className={'gallery-description-text'}>
                    This is an assortment of photos of FIZZ playing at various shows! If you want to see any image
                    more clearly, just click it and you can view it in full screen mode.
                </Text>
            </div>
            <div className={'image-gallery-container'}>
                <div className={'display-image-container'}>
                    <div className={'display-image'}>
                        <ImageNext
                            alt={images[currentlyVisibleImageIndex].description}
                            width={maxWidth}
                            height={height}
                            src={images[currentlyVisibleImageIndex].src}
                            onClick={() => setVisible(true)}
                        />
                    </div>
                    <div style={{top: `${getTopPixel()}px`}}
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