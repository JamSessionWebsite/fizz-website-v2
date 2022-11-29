import React, {useState} from 'react';
import {Button, Image} from "antd";
import {CaretLeftOutlined, CaretRightOutlined} from "@ant-design/icons";

const ImageGallery = ({images}) => {
    const [visible, setVisible] = useState(false);
    const [currentlyVisibleImageIndex, setCurrentlyVisibleImageIndex] = useState(0);
    return (
        <div className={'image-gallery-container'}>
            <div className={'flex-row'}>
                <div className={'button-container'}>
                    <Button
                        ghost
                        icon={<CaretLeftOutlined/>}/>
                </div>
                <Image
                    width={200}
                    src={images[currentlyVisibleImageIndex].src}
                    onClick={() => setVisible(true)}
                    preview={{visible: false}}/>
                <div className={'button-container'}>
                    <Button
                        ghost
                        icon={<CaretRightOutlined/>}/>
                </div>
            </div>
            <div style={{display: 'none'}}>
                <Image.PreviewGroup
                    preview={{visible, current: currentlyVisibleImageIndex, onVisibleChange: (vis) => setVisible(vis)}}>
                    {images.map(image => <Image src={image.src}/>)}
                </Image.PreviewGroup>
            </div>
        </div>

    );
};

export default ImageGallery;