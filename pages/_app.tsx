import '../public/static/scss/App.scss';
import AppContent from "./AppContent";
import {Provider} from "react-redux";
import fizzWebsiteStore from "../redux/FizzWebsiteStore";

export default function App({Component, pageProps}) {
    return (
        <Provider store={fizzWebsiteStore}>
            <AppContent Component={Component} pageProps={pageProps}/>
        </Provider>
    );
}