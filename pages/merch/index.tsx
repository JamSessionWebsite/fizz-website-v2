import React from 'react';
import Head from "next/head";
import dynamic from "next/dynamic";
const Card = dynamic(() => import('antd').then((dep) => dep.Card));
const Text = dynamic(() => import('antd').then((dep) => dep.Typography.Text));
const ImageAntd = dynamic(() => import('antd').then((dep) => dep.Image));

const MerchPage = () => {
    const merchItems = [
        {
            name: 'Fizz Soda Sticker',
            colors: [{
                color: 'blue',
                imageSrc: 'https://media.bandpractice.app/bands/9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d/bandFiles/images/fizz-website-logo.png',
                aspectRatio: 2,
            }],
            pricing: {
                1: 200,
                3: 500,
                10: 1000,
            }
        },
        {
            name: 'Ass Bracelets',
            colors: [{
                aspectRatio: 3 / 4,
                imageSrc: 'https://media.bandpractice.app/bands/9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d/bandFiles/images/merch/ass-bracelets.jpeg',
                color: 'assorted'
            }],
            pricing: {
                1: 500,
            }
        },
    ];

    return (
        <div className={'merch-page-container'}>
            <Head>
                <title>Merch | Fizz</title>
                <meta
                    name='description'
                    content='Although not currently available online, take a look to see what we currently are going to be offering at our live shows in the future.  We hope to add more and more to this in the future and eventually sell our merch online!'/>
            </Head>
            <div className={'merch-text-container'}>
                <Text className={'white-text'}>
                    We hope to be able to sell merch online in the near future! Until then, these items can be purchased at our live shows.
                </Text>
            </div>
            <div className={'merch-item-grid'}>
                {merchItems.map(item => {
                    const itemColor = item.colors[0];
                    let aspectRatio = itemColor.aspectRatio;
                    const height = 200;
                    const width = aspectRatio > 1 ? height / aspectRatio : height * aspectRatio;
                    return <div className={'button-container'}>
                        <Card className={'merch-item-card'}>
                            <div className={'flex-column'}>
                                <ImageAntd height={`${height}px`} width={`${width}px`} src={itemColor.imageSrc}/>
                                <div>
                                    {item.name}
                                </div>
                                <div>
                                    {(item.pricing['1'] / 100).toFixed(2)}
                                </div>
                            </div>
                        </Card></div>;
                })}
            </div>
        </div>
    );
};

export default MerchPage;