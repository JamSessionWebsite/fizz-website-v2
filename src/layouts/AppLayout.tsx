import React, {Fragment} from 'react';
import {Button, Image, Layout, Menu, Skeleton} from "antd";
import Sider from "antd/es/layout/Sider";
import JamSessionRoutes from "../routing/JamSessionRoutes";
import {ItemType} from "antd/es/menu/hooks/useItems";
import {FacebookOutlined, InstagramOutlined, MailOutlined, YoutubeOutlined} from "@ant-design/icons";
import {Footer} from "antd/es/layout/layout";

const {Content, Header} = Layout;
const DISABLED_FEATURE = true;
const AppLayout = ({}) => {
    const navigateInNewTab = (url) => {
        window.open(url, '_blank').focus();
    }

    const populateEmail = () => {
        window.location.href = `mailto:fizzthebandofficial@gmail.com?subject=Hi FIZZ!`
    }

    return (
        <Layout className={`home-page-background`} style={{minHeight: '100vh'}}>
            <Header className={'app-header'}>
                <div className={'fizz-image-container'}>
                    <Image
                        height={'200px'}
                        preview={false}
                        src={'https://audio.fizztheband.com/images/9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d/fizz-soda-red-blue-transparent-bg-256-512.png'}
                    />
                </div>
                {!DISABLED_FEATURE ?
                    <div className={'flex-row'}>
                        <div className={'button-container'}>
                            <Button
                                ghost>
                                About Us
                            </Button>
                        </div>
                        <div className={'button-container'}>
                            <Button
                                ghost>
                                Videos
                            </Button>
                        </div>
                    </div> :
                    <div/>}
            </Header>
            <Content>
                <div style={{padding: 24, minHeight: 360}}>
                    <JamSessionRoutes/>
                </div>
            </Content>
            <Footer className={'app-footer'}>
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
            </Footer>
        </Layout>
    )
};

export default AppLayout;