import React, {useEffect, useState} from 'react';
import {Card, Typography} from "antd";
import Head from "next/head";
import {useSelector} from "react-redux";

const {Text, Paragraph} = Typography;

const AboutUsPage = () => {
    const windowWidth = useSelector((state: {app: any}) => state.app.windowWidth);
    return (
        <div style={{padding: windowWidth <= 760 ? '0' : '0 128px'}}
             className={'about-us-container'}>
            <Head>
                <title>About Us | FIZZ</title>
                <meta
                    name='description'
                    content='FIZZ is a pop/funk/indie band performing live in the Chicago area that takes rich vocal harmonies and a funky rhythm section and layers a powerful horn section on top to create pop music with layers of funk scattered throughout.'></meta>
            </Head>
            <Card style={{padding: windowWidth <= 760 ? '16px 0' : '16px 64px'}}
                  className={'about-us-text-container'}>
                <Paragraph className={'about-us-text'}>
                    Hi! We're FIZZ; a Chicago-based band that plays a large variety of pop, funk, and indie music. We play a
                    mix of original and cover music, but definitely have been focusing on putting together our first album!
                    We have played at many notable venues in Chicago including <a target={'_blank'} className={'inline-link'} href={'https://www.houseofblues.com/chicago'}>House of Blues</a>, <a target={'_blank'} className={'inline-link'} href={'https://bottomlounge.com/'}>Bottom Lounge</a>, and <a target={'_blank'} className={'inline-link'} href={'https://navypier.org/listings/listing/navy-pier-beer-garden'}>Navy Pier Beer Garden</a>.
                    We got to play the Navy Pier show because we won 3rd place in the <a target={'_blank'} className={'inline-link'} href={'https://www.bitterjesterfoundation.org/bitter-jester-music-festival-info'}>Bitter Jester Music Festival</a>!
                    We performed in that festival style competition many years in the past under the name Elise and the Police.
                    We also won the Battle of the Bands at Northwestern University which gave us the opportunity to open for <a target={'_blank'} className={'inline-link'} href={'https://www.dilloday.com/'}>Dillo Day</a>; a music festival where we performed just before artists
                    such as <a target={'_blank'} className={'inline-link'} href={'https://hippocampus.band/'}>Hippo Campus</a> and <a target={'_blank'} className={'inline-link'} href={'https://www.asapferg.com/'}>A$AP Ferg</a> performing.
                </Paragraph>
                <Paragraph className={'about-us-text'}>
                    Currently, we have been working on writing new music and are actively looking for gigs in the
                    Chicago area.  Please email us at <a target={'_blank'} className={'inline-link'} href={'mailto:booking@fizztheband.com?subject=Booking with FIZZ'}>booking@fizztheband.com</a>  if you
                    want FIZZ to play a show at your venue!  FIZZ is made up of 2 vocalists, guitar, bass, drums, trumpet, alto sax, and trombone.
                </Paragraph>
                <Paragraph className={'about-us-text full-width space-between'}>
                    <div>
                        Our 2 lead vocalists also perform solo work under the names <a target={'_blank'} className={'inline-link'} href={'https://open.spotify.com/artist/4BqHNH6QvIEODtdFByLcMy?si=AEiUoZqFSgq6jJzI4dHFUA'}>Morgan Buckley</a> and <a target={'_blank'} className={'inline-link'} href={'https://open.spotify.com/artist/2YTQ73StTkzDG9nmqVEWid?si=vGucLIJrT8WHVUk9GGy9Lg'}>Sun Queen</a>.
                        Be sure to check out all of our links in one place on our LinkTree:
                    </div>
                    <div/>
                </Paragraph>
                <Paragraph className={'about-us-text full-width space-between'}>
                    <a target={'_blank'} href={'https://linktr.ee/fizz.band'}>https://linktr.ee/fizz.band</a>
                    <div/>
                </Paragraph>
            </Card>
        </div>
    );
}

export default AboutUsPage;