import React, {useEffect, useState} from 'react';
import {Button, Card, Image as ImageAntd} from "antd";
import {CaretLeftOutlined, CaretRightOutlined} from "@ant-design/icons";

const ImageGallery = ({images, title = null}) => {
    const [visible, setVisible] = useState(false);
    const [currentlyVisibleImageIndex, setCurrentlyVisibleImageIndex] = useState(0);
    const [imageDimensions, setImageDimensions] = useState({width: 0, height: 0});

    useEffect(() => {
        onImageChange(images[currentlyVisibleImageIndex].src);
    }, [images, currentlyVisibleImageIndex]);

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
    const calculatedHeight = maxWidth / ratio;
    const height = `${calculatedHeight}px`;
    return (
        <Card title={title ? title : null}>
            <div className={'image-gallery-container'}>
                <div className={'display-image-container'}>
                    <ImageAntd
                        alt={images[currentlyVisibleImageIndex].description}
                        width={maxWidth}
                        height={height}
                        src={images[currentlyVisibleImageIndex].src}
                        onClick={() => setVisible(true)}
                        preview={{visible: false}}/>
                    <div style={{top: `${ratio < 1 ? calculatedHeight - 88 : calculatedHeight - 84}px`}} className={'image-description'}>
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
            <div style={{display: 'none'}}>
                <ImageAntd.PreviewGroup
                    preview={{visible, current: currentlyVisibleImageIndex, onVisibleChange: (vis) => setVisible(vis)}}>
                    {images.map(image => <ImageAntd
                        alt={image.description}
                        src={image.src}/>)}
                </ImageAntd.PreviewGroup>
            </div>
        </Card>

    );
};

export default ImageGallery;