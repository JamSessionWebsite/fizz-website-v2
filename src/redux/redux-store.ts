import {combineReducers, createStore} from 'redux';
import bandsReducer from "./reducers/bands.reducer";

export interface ReduxStore {
    bandsState: any;
}

const reducers: ReduxStore = {
    bandsState: bandsReducer,
};

const reduxStore = createStore(
    combineReducers(reducers)
);

export default reduxStore;
