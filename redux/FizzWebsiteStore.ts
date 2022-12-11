import {combineReducers, createStore} from "redux";
import appReducer from "./reducers/appReducer";

export interface FizzWebsiteReduxStore {app: any}

const fizzWebsiteStore = createStore(
    combineReducers<FizzWebsiteReduxStore>({
        app: appReducer,
    })
);

export default fizzWebsiteStore;