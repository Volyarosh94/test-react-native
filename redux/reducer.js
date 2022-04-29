import { combineReducers } from 'redux';

const INITIAL_STATE = {
    crypto: [],
};

const subjectsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SELECT_SUBJECT':
            return { crypto: action.payload};
        default:
            return state
    }
};

export default combineReducers({
    subjects: subjectsReducer
});
