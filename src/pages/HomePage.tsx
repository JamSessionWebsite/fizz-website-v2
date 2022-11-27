import React from 'react';
import {Button, Image, Typography} from "antd";
import {FacebookOutlined, InstagramOutlined, MailOutlined, YoutubeOutlined} from "@ant-design/icons";

const {Title, Text} = Typography;

const HomePage = () => {
    const navigateInNewTab = (url) => {
        window.open(url, '_blank').focus();
    }

    const populateEmail = () => {
        window.location.href = `mailto:fizzthebandofficial@gmail.com?subject=Hi FIZZ!`
    }

    return (
        <div className={'home-page-background'}>
            <div className={'flex-row full-width header-row'}>
                <Image
                    preview={false}
                    width={'30%'}
                    src={'https://audio.fizztheband.com/images/9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d/fizz-logo-pop-label-transparent.png'}/>
            </div>
            <div className={'flex-row full-width main-content-row'}>
                <Text
                    style={{fontSize: '32px'}}
                    className={'white-text'}>Hi! We are a funky pop band from Chicago called FIZZ. Our website is in the
                    process of being built so please check back soon for more content!</Text>
            </div>
            <div className={'flex-row full-width app-footer'}>
                <div className={'button-container'}>
                    <Button
                        ghost
                        size={'large'}
                        onClick={() => populateEmail()}
                        icon={<MailOutlined />}
                    ></Button>
                </div>
                <div className={'button-container'}>
                    <Button
                        ghost
                        size={'large'}
                        onClick={() => navigateInNewTab(`https://www.youtube.com/channel/UCCYlcZuQdCE2gD3k9jsTRJw`)}
                        icon={<YoutubeOutlined />}
                    >
                    </Button>
                </div>
                <div className={'button-container'}>
                    <Button
                        ghost
                        size={'large'}
                        onClick={() => navigateInNewTab('https://www.instagram.com/fizz.band/')}
                        icon={<InstagramOutlined />}
                    ></Button>
                </div>
                <div className={'button-container'}>
                    <Button
                        ghost
                        size={'large'}
                        onClick={() => navigateInNewTab('https://www.facebook.com/Fizzthebandofficial')}
                        icon={<FacebookOutlined />}
                    ></Button>
                </div>
            </div>
        </div>
    )
};

export default HomePage;