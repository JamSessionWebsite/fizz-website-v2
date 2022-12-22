import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {Button} from "antd";
import useBreakpoint from "use-breakpoint";
import {MenuOutlined} from "@ant-design/icons";
import {BAND_WEBSITE_CONFIG} from "../../band-config";
import Image from "next/image";
import {useRouter} from "next/router";

const INTERNAL_LINKS = [
    {name: 'About Us', href: '/about-us'},
    {name: 'Shows', href: '/shows'},
    {name: 'Contact Us', href: '/contact-us'},
    {name: 'Videos', href: '/videos'},
    {name: 'Merch', href: '/merch'},
];
export const BREAKPOINTS = {mobile: 0, tablet: 768, desktop: 1280}
const CollapsibleHeader = () => {
    const {breakpoint, maxWidth, minWidth} = useBreakpoint(BREAKPOINTS, 'desktop');
    const [isCollapsed, setIsCollapsed] = useState(true);
    const router = useRouter();

    useEffect(() => {
        setIsCollapsed(minWidth === 0);
    }, [minWidth]);

    const toggleMenu = () => {
        setIsCollapsed(!isCollapsed);
    }
    const ImageAndBandName = <div className={'logo-and-title-container'}>
        <div className={'fizz-logo-container'}>
            <Image
                alt={BAND_WEBSITE_CONFIG.logo.alt}
                onClick={async () => {
                    setIsCollapsed(true);
                    return router.push('/');
                }}
                className={'clickable'}
                height={200}
                width={100}
                priority
                src={BAND_WEBSITE_CONFIG.logo.src}
            />
        </div>
    </div>;
    return (
        <div className={'collapsible-header-container'}>
            <div
                style={{
                    ...({backgroundImage: `url(${BAND_WEBSITE_CONFIG.backgroundImageSrc})`}),
                }}
                className={`collapsible-header ${isCollapsed || minWidth > 0 ? 'collapsed' : 'expanded'} ${minWidth > 0 ? 'flex-row' : 'flex-column'}`}>
                {
                    minWidth === 0 ?
                        <Button
                            className={'collapse-button'}
                            ghost
                            onClick={toggleMenu}
                            icon={<MenuOutlined/>}/> :
                        <></>
                }
                {
                    !isCollapsed && minWidth === 0 ?
                        ImageAndBandName :
                        <></>
                }
                {
                    !isCollapsed ?
                        INTERNAL_LINKS.map((link, index) => {
                            return (
                                <div key={`nav-link-${index}`} className={'button-container'}>
                                    <Button
                                        onClick={() => {
                                            setIsCollapsed(minWidth === 0);
                                        }} ghost>
                                        <Link href={link.href}>{link.name}</Link>
                                    </Button>
                                </div>
                            )
                        }) :
                        <></>
                }
            </div>
        </div>
    );
}

export default CollapsibleHeader;