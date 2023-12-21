import React from 'react';
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import {BAND_WEBSITE_CONFIG} from "../../band-config";
import useBreakpoint from "use-breakpoint";
import {BREAKPOINTS} from "../../components/common/CollapsibleHeader";
const Card = dynamic(() => import('antd').then((dep) => dep.Card));
const Paragraph = dynamic(() => import('antd').then((dep) => dep.Typography.Paragraph));

const AboutUsPage = () => {
    const {minWidth} = useBreakpoint(BREAKPOINTS, 'desktop');
    return (
        <div style={{padding: minWidth === 0 ? '0' : '0 128px'}}
             className={'about-us-container'}>
            <Head>
                <title>About Us | {BAND_WEBSITE_CONFIG.bandName}</title>
                <meta
                    name='description'
                    content='Fizz is a pop/funk/indie band performing live in the Chicago area that takes rich vocal harmonies and a funky rhythm section and layers a powerful horn section on top to create pop music with layers of funk scattered throughout.'></meta>
            </Head>
            <Card style={{padding: minWidth === 0 ? '16px 0' : '16px 64px'}}
                  className={'about-us-text-container'}>
                <Paragraph className={'about-us-text'}>
                    Hi! We're The Sips, a Chicago-based band that plays a large variety of pop and funk music. You may also know us
                    as Fizz which was our name up until January 2024! We play a
                    majority of original music with a few funky covers of some of our favorite songs!
                    We have played at many notable venues in Chicago including <a target={'_blank'} className={'inline-link'} href={'https://www.houseofblues.com/chicago'}>House of Blues</a>, <a target={'_blank'} className={'inline-link'} href={'https://bottomlounge.com/'}>Bottom Lounge</a>, and <a target={'_blank'} className={'inline-link'} href={'https://navypier.org/listings/listing/navy-pier-beer-garden'}>Navy Pier Beer Garden</a>.
                    We got to play the Navy Pier show because we won 3rd place in the <a target={'_blank'} className={'inline-link'} href={'https://www.bitterjesterfoundation.org/bitter-jester-music-festival-info'}>Bitter Jester Music Festival</a>!
                    We performed in that festival style competition many years in the past under the name Elise and the Police.
                    We also won the Battle of the Bands at Northwestern University which gave us the opportunity to open for <a target={'_blank'} className={'inline-link'} href={'https://www.dilloday.com/'}>Dillo Day</a>, a music festival where we performed in a lineup of artists
                    including <a target={'_blank'} className={'inline-link'} href={'https://hippocampus.band/'}>Hippo Campus</a> and <a target={'_blank'} className={'inline-link'} href={'https://www.asapferg.com/'}>A$AP Ferg</a>.
                </Paragraph>
                <Paragraph className={'about-us-text'}>
                    Currently, we have recently finished six new songs and are actively looking for gigs in the
                    Chicago area.  Please email us at <a target={'_blank'} className={'inline-link'} href={'mailto:booking@fizz.band?subject=Booking with Fizz'}>booking@fizz.band</a>  if you
                    want The Sips to play a show at your venue!  The Sips is made up of a vocalist, guitar, bass, drums, trumpet, alto sax, and tenor sax.
                </Paragraph>
                <Paragraph className={'about-us-text full-width space-between'}>
                    <div>
                        Our lead vocalist, Morgan, also has her own <a target={'_blank'} className={'inline-link'} href={'https://open.spotify.com/artist/4BqHNH6QvIEODtdFByLcMy?si=AEiUoZqFSgq6jJzI4dHFUA'}>solo project</a> performing singer-songwriter music with guitar, ukulele, and more!
                        Also, be sure to check out our rhythm section's (Spencer, Alec, and Patch) other band, <a target={'_blank'} className={'inline-link'} href={'https://sunqueenmusic.com'}>Sun Queen</a>.  They are an indie rock band
                        with an ethereal, spacey vibe mixed in!
                        Be sure to check out all of our links in one place on our LinkTree:
                    </div>
                    <div/>
                </Paragraph>
                <Paragraph className={'about-us-text full-width space-between'}>
                    <a target={'_blank'} href={'https://linktr.ee/fizz.band'}>https://linktr.ee/fizz.band</a>
                    <div/>
                </Paragraph>
                <Paragraph className={'about-us-text full-width'}>
                    If you are interested in contacting The Sips, check out our <Link className={'inline-link'} href={'/contact-us'}>contact info</Link> page to find the correct email.
                    To see our upcoming shows, take a look at the <Link className={'inline-link'} href={'/shows'}>shows</Link> page.
                </Paragraph>
            </Card>
        </div>
    );
}

export default AboutUsPage;