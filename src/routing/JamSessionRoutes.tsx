import React from 'react';
import {Outlet, Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";

const JamSessionRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route
                path="*"
                element={
                    <main style={{padding: "1rem"}}>
                        <p>There's nothing here!</p>
                    </main>
                }
            />
        </Routes>
    )
}

export default JamSessionRoutes;