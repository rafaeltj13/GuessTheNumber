import {
    RANKING_ASYNC_REQUEST_STARTED,
    GET_SCORES_SUCCESS,
    GET_SCORES_FAILED
} from './actions';

const initialState = {
    loading: false,
    error: null,
    scores: []
};

const ranking = (state = initialState, action) => {
    switch (action.type) {
        case RANKING_ASYNC_REQUEST_STARTED:
            return {
                ...state,
                loading: true
            }

        case GET_SCORES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                scores: action.data
            }

        case GET_SCORES_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error,
                scores: []
            }

        default:
            return state;
    }
};


export default ranking;