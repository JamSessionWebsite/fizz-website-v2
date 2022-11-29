import React from 'react';
import {Helmet} from 'react-helmet';
import YouTube from "react-youtube";

const VideosPage = () => {
    const videos = [
        {
            type: 'youtube',
            videoId: 'Po3-1mDTm7I',
            url: 'https://www.youtube.com/watch?v=Po3-1mDTm7I&ab_channel=FIZZ',
        },
        {
            type: 'youtube',
            videoId: 'FDmttaicp9A',
            url: 'https://www.youtube.com/watch?v=FDmttaicp9A&ab_channel=FIZZ',
        },
        {
            type: 'youtube',
            videoId: 'SDLzqZ1Dg8s',
            url: 'https://www.youtube.com/watch?v=SDLzqZ1Dg8s&ab_channel=FIZZ',
        },
        {
            type: 'youtube',
            videoId: '_7TZ8DVQpug',
            url: 'https://www.youtube.com/watch?v=_7TZ8DVQpug&ab_channel=FIZZ',
        },
        {
            type: 'youtube',
            videoId: 'DW-T3eGuYAo',
            url: 'https://www.youtube.com/watch?v=DW-T3eGuYAo&ab_channel=FIZZ',
        },

    ]
    return (
        <div className={'videos-page-container'}>
            <Helmet>
                <title>FIZZ - Videos</title>
                <meta
                    name='description'
                    content='Check out the latest videos of FIZZ performing funk/pop/indie music in the Chicago area!'/>
            </Helmet>
            <div className={'video-grid'}>
                {videos.map(video => {
                    return (
                        <div className={'video-grid-item'}>
                            {video.type === 'youtube' ?
                                <YouTube
                                    opts={{width: '248px', height: '186px'}}
                                    videoId={video.videoId}/> :
                            <iframe
                                className={'tiktok-video'}
                                src={video.url} />}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default VideosPage;