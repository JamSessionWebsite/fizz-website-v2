const INITIAL_APP_STATE = {
    windowWidth: 0,
};

export default function appReducer(state = INITIAL_APP_STATE, action) {
    switch(action.type) {
        case 'app/setWindowWidth':
            return {...state, windowWidth: action.payload.windowWidth}
        default:
            return state;
    }
}