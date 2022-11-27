import {ReduxStore} from "../redux-store";

export class BandsSelectors {
    static getBandsForLoggedInUser = (state: ReduxStore) => state.bandsState.bandsForLoggedInUser;
    static getAllBands = (state: ReduxStore) => state.bandsState.allBands;
}