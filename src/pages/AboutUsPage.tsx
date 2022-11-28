import React from 'react';
import {Typography} from "antd";

const {Text, Paragraph} = Typography;

const AboutUsPage = () => {
    return (
        <div className={'about-us-container'}>
            <Paragraph className={'flex-row white-text'}>
                Many members of FIZZ have been playing music together for over 10 years. We have played
                shows under the name Elise and the Police at House of Blues, Bottom Lounge, and more. We
                have also played multiple shows under the name FIZZ in the North Shore area including winning
                the Battle of the Bands at Northwestern University. This allowed us to open for Dillo Day; a
                music festival with artists such as Hippo Campus and A$AP Ferg performing.
            </Paragraph>
            <Paragraph className={'flex-row white-text'}>
                Currently, we have been working on writing new music and are actively looking for gigs in the Chicago
                area. FIZZ is made up of 2 vocalists, guitar, bass, drums, trumpet, alto sax, and trombone. We play
                funky pop
                covers as well as an assortment of original music.
            </Paragraph>
            <Paragraph className={'flex-row full-width space-between white-text'}>
                <div>
                    Our 2 lead vocalists also perform solo work under the names Morgan Buckley and Sun Queen. You can
                    check
                    out the links to their work on our LinkTree:
                </div>
                <div/>
            </Paragraph>
            <Paragraph className={'flex-row full-width space-between'}>
                <a target={'_blank'} href={'https://linktr.ee/fizz.band'}>https://linktr.ee/fizz.band</a>
                <div/>
            </Paragraph>
        </div>
    );
}

export default AboutUsPage;