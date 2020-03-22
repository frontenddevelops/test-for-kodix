import { initialState } from "../initialState";

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_INTERVAL':
            return {currentInterval: state.currentInterval + action.payload};
        default:
            return {currentInterval: state.currentInterval};
    }
};
