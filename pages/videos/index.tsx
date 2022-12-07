import React, {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';
import {Button, Card, Divider, List, Skeleton} from "antd";
import InfiniteScroll from 'react-infinite-scroll-component';
import {ArrowUpOutlined} from "@ant-design/icons";

const VideosPage = () => {
    const videos = [
        {
            type: 'youtube',
            videoId: 'Po3-1mDTm7I',
            url: 'https://www.youtube-nocookie.com/embed/Po3-1mDTm7I',
        },
        {
            type: 'tiktok',
            url: 'https://www.tiktok.com/embed/7169370519249095979'
        },
        {
            type: 'tiktok',
            url: 'https://www.tiktok.com/embed/7169345381040491822'
        },
        {
            type: 'youtube',
            videoId: 'FDmttaicp9A',
            url: 'https://www.youtube-nocookie.com/embed/FDmttaicp9A',
        },
        {
            type: 'youtube',
            videoId: 'SDLzqZ1Dg8s',
            url: 'https://www.youtube-nocookie.com/embed/SDLzqZ1Dg8s',
        },
        {
            type: 'youtube',
            videoId: '_7TZ8DVQpug',
            url: 'https://www.youtube-nocookie.com/embed/_7TZ8DVQpug',
        },
        {
            type: 'youtube',
            videoId: 'DW-T3eGuYAo',
            url: 'https://www.youtube-nocookie.com/embed/DW-T3eGuYAo',
        }
    ];
    const [loading, setLoading] = useState(false);
    const [loadedVideos, setLoadedVideos] = useState([]);
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

    function getBrowserWidth() {
        if (typeof window !== 'undefined') {
            return window.innerWidth;
        }
        return 760;
    }

    const getMaxWidth = (ratio) => {
        if (getBrowserWidth() <= 760) {
            return 264;
        }
        if (ratio < 1) {
            return 296;
        }
        return 600;
    }

    return (
        <div className={'videos-page-container'}>
            <Helmet>
                <title>Videos | FIZZ</title>
                <meta
                    name='description'
                    content='Check out the latest videos of FIZZ performing live music in the Chicago area!'/>
                <script async src="https://www.tiktok.com/embed.js"></script>
            </Helmet>
            <div className={'flex-row'} style={{
                height: 736,
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
                                }
                            }}
                            icon={<ArrowUpOutlined/>}
                            className={'flex-row full-width'}>Back to Top</Button>
                    }
                    scrollableTarget="scrollableDiv"
                >
                    <List
                        dataSource={loadedVideos}
                        renderItem={(video, index) => <div
                            id={`video-grid-item-${index}`}
                            className={'video-grid-item'}
                            key={`video-grid-item-${index}`}>
                            <iframe
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                style={{border: 'none'}}
                                loading={'lazy'}
                                sandbox='allow-scripts allow-same-origin allow-presentation'
                                width={'320px'}
                                height={video.type === 'youtube' ? '244px' : '737px'}
                                src={video.url}/>
                        </div>}>
                    </List>
                </InfiniteScroll>
            </div>
        </div>
    );
}

export default VideosPage;