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
import {BAND_WEBSITE_CONFIG} from "../band-config";

const Layout = dynamic(() => import('antd').then(dep => dep.Layout));
const Button = dynamic(() => import('antd').then(dep => dep.Button));
const FacebookOutlined = dynamic(() => import('@ant-design/icons').then(dep => dep.FacebookOutlined));
const MailOutlined = dynamic(() => import('@ant-design/icons').then(dep => dep.MailOutlined));
const InstagramOutlined = dynamic(() => import('@ant-design/icons').then(dep => dep.InstagramOutlined));
const YoutubeOutlined = dynamic(() => import('@ant-design/icons').then(dep => dep.YoutubeOutlined));

const SOCIAL_MEDIA_ICON_MAP = {
    facebook: <FacebookOutlined/>,
    tiktok: <Image
        alt={'Tiktok brand logo'}
        height={24}
        width={24}
        src={'/static/tiktok-logo.svg'}/>,
    youtube: <YoutubeOutlined/>,
    instagram: <InstagramOutlined/>,
}

const INTERNAL_LINKS = [
    {name: 'About Us', href: '/about-us'},
    {name: 'Shows', href: '/shows'},
    {name: 'Contact Us', href: '/contact-us'},
    {name: 'Videos', href: '/videos'},
    {name: 'Merch', href: '/merch'},
]

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
                <title>{BAND_WEBSITE_CONFIG.mainTitle}</title>
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
                            "name": BAND_WEBSITE_CONFIG.bandName,
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
                    {
                        INTERNAL_LINKS.map((link, index) => {
                            return (
                                <div key={`nav-link-${index}`} className={'button-container'}>
                                    <Button
                                        ghost>
                                        <Link href={link.href}>{link.name}</Link>
                                    </Button>
                                </div>
                            )
                        })
                    }
                </div>
            </header>
            <main className={'app-content'}>
                <div className={'full-width'} style={{minHeight: 360}}>
                    <div className={'logo-and-title-container'}>
                        <div className={'fizz-logo-container'}>
                            <Image
                                alt={BAND_WEBSITE_CONFIG.logo.alt}
                                onClick={async () => router.push('/')}
                                className={'clickable'}
                                height={200}
                                width={100}
                                priority
                                src={BAND_WEBSITE_CONFIG.logo.src}
                            />
                        </div>
                        <div>
                            <div className={'title-container'}>
                                <h1 className={'fizz-title'}>{BAND_WEBSITE_CONFIG.bandName}</h1>
                                <h2 className={'fizz-subtitle'}>{BAND_WEBSITE_CONFIG.mainTitle}</h2>
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
                {BAND_WEBSITE_CONFIG.socialMedia.map((item, index) => {
                    return (
                        <div key={`social-media-${index}`} className={'button-container'}>
                            <Button
                                ghost
                                size={'large'}
                                href={item.pageSrc}
                                icon={SOCIAL_MEDIA_ICON_MAP[item.platform]}
                                target={'_blank'}
                            />
                        </div>
                    )
                })}
            </footer>
        </Layout>
    );
}