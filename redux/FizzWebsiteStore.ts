import {combineReducers, createStore} from "redux";
import appReducer from "./reducers/appReducer";

const fizzWebsiteStore = createStore(
    combineReducers<{app: any}>({
        app: appReducer,
    })
);

export default fizzWebsiteStore;