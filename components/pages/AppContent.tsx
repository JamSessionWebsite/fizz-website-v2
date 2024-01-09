import React from "react";
import Head from "next/head";
import Script from "next/script";
import dynamic from "next/dynamic";
import {BAND_WEBSITE_CONFIG} from "../../band-config";
import CollapsibleHeader, {BREAKPOINTS} from "../common/CollapsibleHeader";
import useBreakpoint from "use-breakpoint";
import {useRouter} from "next/router";
import {SocialMediaLinks} from "../SocialMediaLinks";
import { Card, Image as AntImage } from "antd";
import BubbleBackground from "../BubbleBackground";

const Layout = dynamic(() => import('antd').then(dep => dep.Layout));

export default function AppContent({Component, pageProps}) {
    function capitalizeFirstLetter(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    const router = useRouter();
    const {minWidth} = useBreakpoint(BREAKPOINTS, 'mobile');
    return (
        <Layout className={`home-page-background`}
                style={{
                    fontFamily: BAND_WEBSITE_CONFIG.fontFamily,
                    minHeight: '100vh'
                }}>
            <Head>
                <title>{BAND_WEBSITE_CONFIG.mainTitle}</title>
                <meta
                    name='description'
                    content='Welcome to the official website of The Sips (formerly Fizz), a pop funk band from Chicago.  Check out videos of our performances, view a list of our upcoming shows, and more!'></meta>
                <link rel="stylesheet"
                      href={`https://fonts.googleapis.com/css2?family=${BAND_WEBSITE_CONFIG.fontFamily}`}></link>
                <link rel="shortcut icon"
                      href="https://media.bandpractice.app/bands/9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d/bandFiles/images/the-sips-logo-no-bg.png"/>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify([{
                            "@context": "https://schema.org",
                            "@type": "MusicGroup",
                            "name": BAND_WEBSITE_CONFIG.bandName,
                            "url": BAND_WEBSITE_CONFIG.domain,
                            "image": [
                                "https://media.bandpractice.app/bands/9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d/bandFiles/images/horn-section-of-fizz-bookclub-chicago.jpg"
                            ],
                            "genre": BAND_WEBSITE_CONFIG.genres
                                .map(genre => capitalizeFirstLetter(genre))
                                .join('/'),
                            "email": BAND_WEBSITE_CONFIG.primaryEmailAddress,
                            "logo": BAND_WEBSITE_CONFIG.logo.src,
                        }
                        ])
                    }}/>
            </Head>
            <Script
                async
                dangerouslySetInnerHTML={{
                    __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-5WBC8G1PS8');
                                    `,
                }}/>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-5WBC8G1PS8"></Script>
            <main className={'app-content'}>
                <BubbleBackground />
                <CollapsibleHeader/>
                <div>
                    {minWidth === 0 ?
                        <div className={'title-container'}>
                            {!BAND_WEBSITE_CONFIG.logo.wide ?
                                <h1 className={'fizz-title'}>{BAND_WEBSITE_CONFIG.bandName}</h1> :
                                <Card>
                                    <AntImage
                                        style={{zIndex: 1000}}
                                        preview={false}
                                        alt={BAND_WEBSITE_CONFIG.logo.wide.alt}
                                        width={100}
                                        height={54.3}
                                        onClick={async () => router.push('/')}
                                        className={'clickable'}
                                        src={BAND_WEBSITE_CONFIG.logo.wide.src}
                                    />
                                </Card>
                            }
                        </div> :
                        <div className={'fizz-logo-container'}>
                            <AntImage
                                style={{zIndex: 1000}}
                                alt={BAND_WEBSITE_CONFIG.logo.alt}
                                onClick={async () => router.push('/')}
                                className={'clickable'}
                                height={200}
                                width={200}
                                src={BAND_WEBSITE_CONFIG.logo.src}
                                preview={false}
                            />
                        </div>
                    }
                </div>
                <div className={'full-width'} style={{minHeight: 360}}>
                    <Component {...pageProps} />
                </div>
            </main>
            <footer className={'app-footer'}>
                <SocialMediaLinks/>
            </footer>
        </Layout>
    );
}