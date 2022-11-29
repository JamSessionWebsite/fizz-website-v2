import React from 'react';
import {Outlet, Route, Routes, useNavigate} from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutUsPage from "../pages/AboutUsPage";
import UpcomingShowsPage from "../pages/UpcomingShowsPage";
import {Button, Typography} from "antd";
import VideosPage from "../pages/VideosPage";
import MerchPage from "../pages/MerchPage";
const {Title} = Typography;

const FizzWebsiteRoutes = () => {
    const navigate = useNavigate();
    return (
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/about-us' element={<AboutUsPage/>}/>
            <Route path='/upcoming-shows' element={<UpcomingShowsPage/>}/>
            <Route path='/videos' element={<VideosPage/>}/>
            <Route path='/merch' element={<MerchPage/>}/>
            <Route
                path="*"
                element={
                    <main style={{padding: "1rem"}}>
                        <div className={'flex-column full-width'}>
                            <Title className={'white-text'}>Woah, looks like you've reached a dead end!</Title>
                            <Button
                                onClick={() => navigate('/')}
                                ghost>Click Here to Go Home</Button>
                        </div>
                    </main>
                }
            />
        </Routes>
    )
}

export default FizzWebsiteRoutes;