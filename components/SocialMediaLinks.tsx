import {BAND_WEBSITE_CONFIG} from "../band-config";
import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
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

export function SocialMediaLinks() {
    const populateEmail = () => {
        if (typeof window !== 'undefined') {
            window.location.href = `mailto:booking@thesips.band?subject=Booking Inquiry for The Sips`
        }
    }
    return <div className={'social-media-links-container'}>
        <div className={"button-container"}>
            <Button
                ghost
                size={"large"}
                onClick={populateEmail}
                target={"_blank"}
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
    </div>;
}