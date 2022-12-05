import React from 'react';
import {Card} from "antd";
import {useSelector} from "react-redux";
import Head from "next/head";

const ContactUs = () => {
    const windowWidth = useSelector((state: { app: any }) => state.app.windowWidth);
    return (
        <div
            className={'contact-us-container'}
            style={{padding: windowWidth <= 760 ? '0 16px' : '0 128px'}}>
            <Head>
                <title>Contact Us | FIZZ</title>
                <meta
                    name='description'
                    content='Contact FIZZ for booking, merch, website issues, or just to chat.  For booking, you can reach us at booking@fizztheband.com.'></meta>
            </Head>
            <Card
                title={'Contact FIZZ'}>
                <div className={'contact-us-text-container'}>
                    <div className={'label'}>Booking: </div>
                    <a
                        href={'mailto:booking@fizztheband.com?subject=Booking with FIZZ'}
                        className={'contact-us-text'}>booking@fizztheband.com</a>
                </div>
                <div className={'contact-us-text-container'}>
                    <div className={'label'}>Merch: </div>
                    <a
                        href={'mailto:merch@fizztheband.com?subject=Merch Proposal for FIZZ'}
                        className={'contact-us-text'}>merch@fizztheband.com</a>
                </div>
                <div className={'contact-us-text-container'}>
                    <div className={'label'}>Website: </div>
                    <a
                        href={'mailto:spencer@fizztheband.com?subject=I Have an Issue With the Website'}
                        className={'contact-us-text'}>spencer@fizztheband.com</a>
                </div>
                <div className={'contact-us-text-container'}>
                    <div className={'label'}>Other: </div>
                    <a
                        href={'mailto:other@fizztheband.com?subject=Hi!'}
                        className={'contact-us-text'}>other@fizztheband.com</a>
                </div>
            </Card>
        </div>
    )
};

export default ContactUs;