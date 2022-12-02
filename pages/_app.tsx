import {Button, Image, Layout} from "antd";
import Link from "next/link";
import {FacebookOutlined, InstagramOutlined, MailOutlined, YoutubeOutlined} from "@ant-design/icons";
import React from "react";
import '../scss/App.scss';
import {useRouter} from "next/router";
import Head from "next/head";

export default function MyApp({Component, pageProps}) {
    const router = useRouter();
    const populateEmail = () => {
        if (typeof window !== 'undefined') {
            window.location.href = `mailto:fizzthebandofficial@gmail.com?subject=Hi FIZZ!`
        }
    }

    return (
        <Layout className={`home-page-background`} style={{minHeight: '100vh'}}>
            <Head>
                <title>FIZZ: A Local Chicago Pop/Funk/Indie Band</title>
                <meta
                    name='description'
                    content='Welcome to the official website of FIZZ, a pop/funk/indie band from Chicago.  Check out videos of our performances, view a list of our upcoming shows, and more!'></meta>
                <link rel="shortcut icon"
                      href="https://audio.fizztheband.com/images/fizz-website/fizz-website-ico.png"/>
            </Head>
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
                    <div className={'logo-and-title-container'}>
                        <div>
                            <Image
                                onClick={async () => router.push('/')}
                                className={'clickable'}
                                height={'200px'}
                                width={'100px'}
                                preview={false}
                                src={'https://audio.fizztheband.com/images/fizz-website/fizz-website-logo.png'}
                            />
                        </div>
                        <div>
                            <div className={'title-container'}>
                                <h1 className={'fizz-title'}>FIZZ</h1>
                                <h3 className={'fizz-subtitle'}>A Chicago Pop/Funk/Indie Band</h3>
                            </div>
                        </div>
                    </div>
                    <Component {...pageProps} />
                </div>
            </main>
            <footer className={'app-footer'}>
                <div className={'button-container'}>
                    <Button
                        ghost
                        size={'large'}
                        onClick={() => populateEmail()}
                        target={'_blank'}
                        icon={<MailOutlined/>}
                    />
                </div>
                <div className={'button-container'}>
                    <Button
                        ghost
                        size={'large'}
                        href={`https://www.youtube.com/channel/UCCYlcZuQdCE2gD3k9jsTRJw`}
                        icon={<YoutubeOutlined/>}
                        target={'_blank'}
                    />
                </div>
                <div className={'button-container'}>
                    <Button
                        ghost
                        size={'large'}
                        href={'https://www.instagram.com/fizz.band/'}
                        icon={<InstagramOutlined/>}
                        target={'_blank'}
                    />
                </div>
                <div className={'button-container'}>
                    <Button
                        ghost
                        size={'large'}
                        href={'https://www.tiktok.com/@fizz.band'}
                        target={'_blank'}
                        icon={<Image preview={false} width={24} src={'./static/tiktok-logo.svg'}/>}
                    />
                </div>
                <div className={'button-container'}>
                    <Button
                        ghost
                        size={'large'}
                        href={'https://www.facebook.com/Fizzthebandofficial'}
                        target={'_blank'}
                        icon={<FacebookOutlined/>}
                    />
                </div>
            </footer>
        </Layout>
    );
}