import React from 'react';
import {Button, Image, Typography} from "antd";
import {FacebookOutlined, InstagramOutlined, MailOutlined, YoutubeOutlined} from "@ant-design/icons";
import YouTube from "react-youtube";

const {Title, Text} = Typography;

const HomePage = () => {

    return (
        <div className={'full-width youtube-container'}>
            <YouTube
                videoId={'Po3-1mDTm7I'}
                opts={{width: '296', height: '394'}}
            ></YouTube>
        </div>
    )
};

export default HomePage;