import React from 'react';
import {Button, Image, Typography} from "antd";
import {FacebookOutlined, InstagramOutlined, MailOutlined, YoutubeOutlined} from "@ant-design/icons";
import YouTube from "react-youtube";

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
            <div className={'full-width youtube-container'}>
                <YouTube
                    videoId={'Po3-1mDTm7I'}
                    style={{maxWidth: '600px', overflowX: 'scroll'}}
                ></YouTube>
            </div>
            <div className={'flex-row full-width app-footer'}>
                <div className={'button-container'}>
                    <Button
                        ghost
                        size={'large'}
                        onClick={() => populateEmail()}
                        icon={<MailOutlined/>}
                    ></Button>
                </div>
                <div className={'button-container'}>
                    <Button
                        ghost
                        size={'large'}
                        onClick={() => navigateInNewTab(`https://www.youtube.com/channel/UCCYlcZuQdCE2gD3k9jsTRJw`)}
                        icon={<YoutubeOutlined/>}
                    >
                    </Button>
                </div>
                <div className={'button-container'}>
                    <Button
                        ghost
                        size={'large'}
                        onClick={() => navigateInNewTab('https://www.instagram.com/fizz.band/')}
                        icon={<InstagramOutlined/>}
                    ></Button>
                </div>
                <div className={'button-container'}>
                    <Button
                        ghost
                        size={'large'}
                        onClick={() => navigateInNewTab('https://www.facebook.com/Fizzthebandofficial')}
                        icon={<FacebookOutlined/>}
                    ></Button>
                </div>
            </div>
        </div>
    )
};

export default HomePage;