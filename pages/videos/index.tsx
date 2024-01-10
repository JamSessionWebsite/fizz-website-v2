import React, {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';
import {ArrowUpOutlined} from "@ant-design/icons";
import dynamic from "next/dynamic";
import Script from "next/script";
import {BAND_WEBSITE_CONFIG} from "../../band-config";
import useBreakpoint from "use-breakpoint";
import {BREAKPOINTS} from "../../components/common/CollapsibleHeader";

const Button = dynamic(() => import('antd').then((dep) => dep.Button));
const List = dynamic(() => import('antd').then((dep) => dep.List));
const Skeleton = dynamic(() => import('antd').then((dep) => dep.Skeleton));
const InfiniteScroll = dynamic(() => import('react-infinite-scroll-component').then((dep) => dep.default));

export interface Video {
    name: string;
    type: 'youtube' | 'tiktok';
    url: string;
    videoId?: string;
}

const videos = BAND_WEBSITE_CONFIG.videos;

const VideosPage = () => {
    const {minWidth} = useBreakpoint(BREAKPOINTS, 'desktop');
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
        setImageSize(minWidth > 0 ? 600 : 320)
    }, [minWidth]);
    const tiktokHeight = 723.531;
    return (
        <div className={'videos-page-container'}>
            <Helmet>
                <title>Videos | The Sips</title>
                <meta
                    name='description'
                    content='Check out the latest videos of The Sips performing live music in the Chicago area!'/>
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