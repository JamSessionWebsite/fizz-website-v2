import React from "react";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import dynamic from "next/dynamic";
import {BAND_WEBSITE_CONFIG} from "../../band-config";
import CollapsibleHeader, {BREAKPOINTS} from "../common/CollapsibleHeader";
import useBreakpoint from "use-breakpoint";
import {useRouter} from "next/router";
import {SocialMediaLinks} from "../SocialMediaLinks";
import { Card } from "antd";

const Layout = dynamic(() => import('antd').then(dep => dep.Layout));

export default function AppContent({Component, pageProps}) {
    function capitalizeFirstLetter(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    const router = useRouter();
    const {minWidth} = useBreakpoint(BREAKPOINTS, 'desktop');
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
                    content='Welcome to the official website of Fizz, a pop/funk/indie band from Chicago.  Check out videos of our performances, view a list of our upcoming shows, and more!'></meta>
                <link rel="stylesheet"
                      href={`https://fonts.googleapis.com/css2?family=${BAND_WEBSITE_CONFIG.fontFamily}`}></link>
                <link rel="shortcut icon"
                      href="https://media.bandpractice.app/bands/9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d/bandFiles/images/Fizz ICO-1.png"/>
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
            <CollapsibleHeader/>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-5WBC8G1PS8"></Script>
            <main className={'app-content'}>
                <div>
                    {minWidth === 0 ?
                        <div className={'title-container'}>
                            {!BAND_WEBSITE_CONFIG.logo.wide ?
                                <h1 className={'fizz-title'}>{BAND_WEBSITE_CONFIG.bandName}</h1> :
                                <Card>
                                    <Image
                                        alt={BAND_WEBSITE_CONFIG.logo.wide.alt}
                                        width={100}
                                        height={54.3}
                                        onClick={async () => router.push('/')}
                                        className={'clickable'}
                                        priority
                                        src={BAND_WEBSITE_CONFIG.logo.wide.src}
                                    />
                                </Card>
                            }
                        </div> :
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