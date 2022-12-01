import {Button, Image, Layout} from "antd";
import Link from "next/link";
import {FacebookOutlined, InstagramOutlined, MailOutlined, YoutubeOutlined} from "@ant-design/icons";
import React from "react";
import '../scss/App.scss';

export default function MyApp({Component, pageProps}) {
    // const navigateInNewTab = (url) => {
    //     if (typeof window !== 'undefined') {
    //         window.open(url, '_blank').focus();
    //     }
    // }
    //
    // const populateEmail = () => {
    //     if (typeof window !== 'undefined') {
    //         window.location.href = `mailto:fizzthebandofficial@gmail.com?subject=Hi FIZZ!`
    //     }
    // }

    return (
        <Layout className={`home-page-background`} style={{minHeight: '100vh'}}>
            <header className={'app-header'}>
                <div className={'flex-row full-width'}>
                    <div className={'button-container'}>
                        <Button
                            ghost>
                            <Link href={'/about-us'}>About Us</Link>
                        </Button>
                    </div>
                    <div className={'button-container'}>
                        <Button
                            ghost>
                            <Link href={'/upcoming-shows'}>Upcoming Shows</Link>
                        </Button>
                    </div>
                    <div className={'button-container'}>
                        <Button
                            ghost>
                            <Link href={'/videos'}>
                                Videos
                            </Link>
                        </Button>
                    </div>
                    <div className={'button-container'}>
                        <Button
                            ghost>
                            <Link href={'/merch'}>
                                Merch
                            </Link>
                        </Button>
                    </div>
                </div>
            </header>
            <main className={'app-content'}>
                <div className={'full-width'} style={{minHeight: 360}}>
                    <div className={'flex-row full-width'}>
                        <Image
                            className={'clickable'}
                            height={'200px'}
                            width={'100px'}
                            preview={false}
                            src={'https://audio.fizztheband.com/images/fizz-website/fizz-website-logo.png'}
                        />
                    </div>
                    <Component {...pageProps} />
                </div>
            </main>
            <footer className={'app-footer'}>
                <div className={'button-container'}>
                    <Button
                        ghost
                        size={'large'}
                        // onClick={() => populateEmail()}
                        icon={<MailOutlined/>}
                    />
                </div>
                <div className={'button-container'}>
                    <Button
                        ghost
                        size={'large'}
                        // onClick={() => navigateInNewTab(`https://www.youtube.com/channel/UCCYlcZuQdCE2gD3k9jsTRJw`)}
                        icon={<YoutubeOutlined/>}
                    />
                </div>
                <div className={'button-container'}>
                    <Button
                        ghost
                        size={'large'}
                        // onClick={() => navigateInNewTab('https://www.instagram.com/fizz.band/')}
                        icon={<InstagramOutlined/>}
                    />
                </div>
                <div className={'button-container'}>
                    <Button
                        ghost
                        size={'large'}
                        // onClick={() => navigateInNewTab('https://www.tiktok.com/@fizz.band')}
                        icon={<Image preview={false} width={24} src={'./static/tiktok-logo.svg'}/>}
                    />
                </div>
                <div className={'button-container'}>
                    <Button
                        ghost
                        size={'large'}
                        // onClick={() => navigateInNewTab('https://www.facebook.com/Fizzthebandofficial')}
                        icon={<FacebookOutlined/>}
                    />
                </div>
            </footer>
        </Layout>
    );
}