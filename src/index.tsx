import React from 'react';
import {Provider} from 'react-redux';
import App from './App';
import reduxStore from "./redux/redux-store";
import {BrowserRouter as Router} from "react-router-dom";
import {createRoot} from "react-dom/client";

const root = createRoot(document.getElementById("root"))
root.render(
    <Router>
        <Provider store={reduxStore}>
            <App/>
        </Provider>
    </Router>
);
