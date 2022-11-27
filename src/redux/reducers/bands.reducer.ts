
export interface BandsState {
}

const INITIAL_BANDS_STATE: BandsState = {
};

export default function bandsReducer(state = INITIAL_BANDS_STATE, action) {
    switch (action.type) {
        case 'bands/reset':
            return INITIAL_BANDS_STATE;
        default:
            return state
    }
}