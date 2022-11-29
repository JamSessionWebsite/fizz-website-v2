import React, {useEffect} from 'react';
import {Typography} from "antd";
import {Helmet} from 'react-helmet';

const {Text, Paragraph} = Typography;

const AboutUsPage = () => {
    return (
        <div className={'about-us-container'}>
            <Helmet>
                <title>FIZZ - About Us</title>
                <meta
                    name='description'
                      content='FIZZ is a pop/funk/ band in the Chicago area that has been playing together for
                                many years.  We have also gone under the name Elise and the Police in the past.'></meta>
            </Helmet>
            <div className={'about-us-text-container'}>
                <Paragraph className={'about-us-text'}>
                    Many members of FIZZ have been playing music together for over 10 years. We have played
                    shows under the name Elise and the Police at House of Blues, Bottom Lounge, and more. We
                    have also played multiple shows under the name FIZZ in the North Shore area including winning
                    the Battle of the Bands at Northwestern University. This allowed us to open for Dillo Day; a
                    music festival with artists such as Hippo Campus and A$AP Ferg performing.
                </Paragraph>
                <Paragraph className={'about-us-text'}>
                    Currently, we have been working on writing new music and are actively looking for gigs in the Chicago
                    area. FIZZ is made up of 2 vocalists, guitar, bass, drums, trumpet, alto sax, and trombone. We play
                    funky pop
                    covers as well as an assortment of original music.
                </Paragraph>
                <Paragraph className={'about-us-text full-width space-between'}>
                    <div>
                        Our 2 lead vocalists also perform solo work under the names Morgan Buckley and Sun Queen. You can
                        check
                        out the links to their work on our LinkTree:
                    </div>
                    <div/>
                </Paragraph>
                <Paragraph className={'about-us-text full-width space-between'}>
                    <a target={'_blank'} href={'https://linktr.ee/fizz.band'}>https://linktr.ee/fizz.band</a>
                    <div/>
                </Paragraph>
            </div>
        </div>
    );
}

export default AboutUsPage;