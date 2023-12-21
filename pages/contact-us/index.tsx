import React from 'react';
import {useSelector} from "react-redux";
import Head from "next/head";
import dynamic from "next/dynamic";
import {BAND_WEBSITE_CONFIG} from "../../band-config";
import useBreakpoint from "use-breakpoint";
import {BREAKPOINTS} from "../../components/common/CollapsibleHeader";

const Card = dynamic(() => import('antd').then(dep => dep.Card));

const ContactUs = () => {
    const {breakpoint, maxWidth, minWidth} = useBreakpoint(BREAKPOINTS, 'desktop');
    return (
        <div
            className={'contact-us-container'}
            style={{padding: minWidth === 0 ? '0 16px' : '0 128px'}}>
            <Head>
                <title>Contact Us | Fizz</title>
                <meta
                    name='description'
                    content='Contact The Sips for booking, merch, website issues, or just to chat.  For booking, you can reach us at booking@thesips.band.'></meta>
            </Head>
            <Card title={'Contact Fizz'}>
                {BAND_WEBSITE_CONFIG.contacts.map((contact, index) => (
                    <div className={'contact-us-text-container'}>
                        <div className={'label'}>{contact.name}:</div>
                        <a
                            href={`mailto:${contact.value}?subject=${contact.defaultSubject}`}
                            className={'contact-us-text'}>{contact.value}</a>
                    </div>
                ))}
            </Card>
        </div>
    )
};

export default ContactUs;