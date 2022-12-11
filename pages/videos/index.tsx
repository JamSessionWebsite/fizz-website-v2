import React, {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';
import {ArrowUpOutlined} from "@ant-design/icons";
import dynamic from "next/dynamic";
import {useSelector} from "react-redux";
import {FizzWebsiteReduxStore} from "../../redux/FizzWebsiteStore";
import Script from "next/script";
const Button = dynamic(() => import('antd').then((dep) => dep.Button));
const List = dynamic(() => import('antd').then((dep) => dep.List));
const Skeleton = dynamic(() => import('antd').then((dep) => dep.Skeleton));
const InfiniteScroll = dynamic(() => import('react-infinite-scroll-component').then((dep) => dep.default));

interface Video {
    name: string;
    type: 'youtube' | 'tiktok';
    url: string;
    videoId?: string;
}

const VideosPage = () => {
    const videos: Video[] = [
        {
            type: 'youtube',
            videoId: 'Po3-1mDTm7I',
            name: 'I Love You - Morgan Buckley (feat. FIZZ)',
            url: 'https://www.youtube-nocookie.com/embed/Po3-1mDTm7I',
        },
        {
            type: 'tiktok',
            name: 'Shot by Lawrence - FIZZ Cover',
            url: 'https://www.tiktok.com/embed/7169370519249095979'
        },
        {
            type: 'tiktok',
            name: 'Something Cosmic - Sun Queen (feat. FIZZ)',
            url: 'https://www.tiktok.com/embed/7169345381040491822'
        },
        {
            type: 'youtube',
            videoId: 'FDmttaicp9A',
            name: 'Latin Man at Dillo Day',
            url: 'https://www.youtube-nocookie.com/embed/FDmttaicp9A',
        },
        {
            type: 'youtube',
            videoId: 'SDLzqZ1Dg8s',
            name: 'American Boy/Dang! Covers - FIZZ',
            url: 'https://www.youtube-nocookie.com/embed/SDLzqZ1Dg8s',
        },
        {
            type: 'youtube',
            videoId: '_7TZ8DVQpug',
            name: 'Caught Up - FIZZ at Dillo Day',
            url: 'https://www.youtube-nocookie.com/embed/_7TZ8DVQpug',
        },
        {
            type: 'youtube',
            videoId: 'DW-T3eGuYAo',
            name: 'FIZZ at Mayfest Battle of the Bands',
            url: 'https://www.youtube-nocookie.com/embed/DW-T3eGuYAo',
        }
    ];
    const windowWidth = useSelector((state: FizzWebsiteReduxStore) => state.app.windowWidth);
    const [loading, setLoading] = useState(false);
    const [loadedVideos, setLoadedVideos] = useState([]);
    const [imageSize, setImageSize] = useState(760);
    const loadMoreData = () => {
        if (loading) {
            return;
        }
        setLoading(true);
        const newVideosToLoadAtATime = 2;
        const videosToLoad = videos.filter((video, index) => index >= loadedVideos.length && index < loadedVideos.length + newVideosToLoadAtATime);
        setLoadedVideos([...loadedVideos, ...videosToLoad]);
        setLoading(false);
    };

    useEffect(() => {
        loadMoreData();
    }, []);

    useEffect(() => {
        setImageSize(windowWidth > 760 ? 600 : 320)
    }, [windowWidth]);
    const tiktokHeight = 723.531;
    return (
        <div className={'videos-page-container'}>
            <Helmet>
                <title>Videos | FIZZ</title>
                <meta
                    name='description'
                    content='Check out the latest videos of FIZZ performing live music in the Chicago area!'/>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify([])
                    }}/>
            </Helmet>
            <Script async src="https://www.tiktok.com/embed.js"></Script>
            <div className={'flex-row'} style={{
                height: tiktokHeight + 36,
                overflowY: 'auto',
                padding: '0 16px',
            }} id="scrollableDiv">
                <InfiniteScroll
                    dataLength={loadedVideos.length}
                    next={loadMoreData}
                    hasMore={loadedVideos.length < videos.length}
                    loader={<Skeleton avatar paragraph={{rows: 1}} active/>}
                    endMessage={
                        <Button
                            ghost
                            onClick={() => {
                                if (typeof document !== 'undefined') {
                                    document.getElementById('video-grid-item-0').scrollIntoView();
                                    if(typeof window !== 'undefined') {
                                        window.scrollTo(0,0);
                                    }
                                }
                            }}
                            icon={<ArrowUpOutlined/>}
                            className={'flex-row full-width'}>Back to Top</Button>
                    }
                    scrollableTarget="scrollableDiv"
                >
                    <List
                        dataSource={loadedVideos}
                        renderItem={(video: Video, index) => {
                            return <div
                                id={`video-grid-item-${index}`}
                                className={'video-grid-item'}
                                key={`video-grid-item-${index}`}>
                                <iframe
                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    style={{border: 'none'}}
                                    loading={'lazy'}
                                    sandbox='allow-scripts allow-same-origin allow-presentation'
                                    width={`${imageSize}px`}
                                    height={video.type === 'youtube' ? `${imageSize * (3 / 4)}px` : `${tiktokHeight}px`}
                                    src={video.url}/>
                            </div>;
                        }}>
                    </List>
                </InfiniteScroll>
            </div>
        </div>
    );
}

export default VideosPage;