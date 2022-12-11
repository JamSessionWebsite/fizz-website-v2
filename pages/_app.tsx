import Link from "next/link";
import React, {useEffect} from "react";
import '../public/static/scss/App.scss';
import {useRouter} from "next/router";
import Head from "next/head";
import fizzWebsiteStore from "../redux/FizzWebsiteStore";
import {Provider} from "react-redux";
import Image from "next/image";
import Script from "next/script";
import dynamic from "next/dynamic";
const Layout = dynamic(() => import('antd').then(dep => dep.Layout));
const Button = dynamic(() => import('antd').then(dep => dep.Button));
const FacebookOutlined = dynamic(() => import('@ant-design/icons').then(dep => dep.FacebookOutlined));
const MailOutlined = dynamic(() => import('@ant-design/icons').then(dep => dep.MailOutlined));
const InstagramOutlined = dynamic(() => import('@ant-design/icons').then(dep => dep.InstagramOutlined));
const YoutubeOutlined = dynamic(() => import('@ant-design/icons').then(dep => dep.YoutubeOutlined));

export default function MyApp({Component, pageProps}) {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            fizzWebsiteStore.dispatch({type: 'app/setWindowWidth', payload: {windowWidth: window.innerWidth}});
            window.onresize = () => {
                fizzWebsiteStore.dispatch({type: 'app/setWindowWidth', payload: {windowWidth: window.innerWidth}});
            }
        }
    }, []);
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
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify([{
                            "@context": "https://schema.org",
                            "@type": "MusicGroup",
                            "name": "FIZZ",
                            "url": "https://fizztheband.com/",
                            "image": [
                                "https://audio.fizztheband.com/images/fizz-website/horn-section-of-fizz-bookclub-chicago.jpg"
                            ],
                            "genre": "Pop/Funk/Indie",
                            "email": "booking@fizztheband.com",
                            "logo": "https://audio.fizztheband.com/images/fizz-website/fizz-website-ico.png"
                        }
                        ])
                    }}/>
                <script
                    async
                    dangerouslySetInnerHTML={{
                        __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-5WBC8G1PS8');
                                    `,
                    }}/>
            </Head>
            <header className={'app-header'}>
                <Script async src="https://www.googletagmanager.com/gtag/js?id=G-5WBC8G1PS8"></Script>
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
                            <Link href={'/shows'}>Shows</Link>
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
                    <div className={'button-container'}>
                        <Button
                            ghost>
                            <Link href={'/contact-us'}>
                                Contact Us
                            </Link>
                        </Button>
                    </div>
                </div>
            </header>
            <main className={'app-content'}>
                <div className={'full-width'} style={{minHeight: 360}}>
                    <div className={'logo-and-title-container'}>
                        <div className={'fizz-logo-container'}>
                            <Image
                                alt={'FIZZ pop can logo'}
                                onClick={async () => router.push('/')}
                                className={'clickable'}
                                height={200}
                                width={100}
                                priority
                                src={'https://audio.fizztheband.com/images/fizz-website/fizz-website-logo.png'}
                            />
                        </div>
                        <div>
                            <div className={'title-container'}>
                                <h1 className={'fizz-title'}>FIZZ</h1>
                                <h2 className={'fizz-subtitle'}>A Chicago Pop/Funk/Indie Band</h2>
                            </div>
                        </div>
                    </div>
                    <Provider store={fizzWebsiteStore}>
                        <Component {...pageProps} />
                    </Provider>
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
                        icon={<Image
                            alt={'Tiktok brand logo'}
                            height={24}
                            width={24}
                            src={'/static/tiktok-logo.svg'}/>
                        }
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