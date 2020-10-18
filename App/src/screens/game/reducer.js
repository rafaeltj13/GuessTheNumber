import { GAME_ASYNC_REQUEST_STARTED, ADD_ATTEMPT, ADD_GUESS, SET_TIMER, SET_NAME, CREATE_SCORE_SUCCESS, CREATE_SCORE_FAILED } from './actions';
import { getIntervalSearch, getGuessValue } from '../../utils/utilFunctions';

const initialState = {
    loading: false,
    error: null,
    name: "",
    attempts: 1,
    startTime: 0,
    endTime: 0,
    lowestNumber: 1,
    highestNumber: 1000,
    guess: 499
};

const game = (state = initialState, action) => {
    switch (action.type) {
        case GAME_ASYNC_REQUEST_STARTED:
            return {
                ...state,
                loading: true
            }

        case ADD_ATTEMPT:
            const newInterval = getIntervalSearch(state.lowestNumber, state.highestNumber, state.guess, action.highOrLow);

            return {
                ...state,
                attempts: state.attempts + 1,
                lowestNumber: newInterval.start,
                highestNumber: newInterval.end,
                guess: newInterval.guess
            }

        case ADD_GUESS:
            const guess = getGuessValue(action.step, action.tip, state.lowestNumber);

            return {
                ...state,
                guess: guess
            }

        case SET_TIMER:
            return {
                ...state,
                [action.time]: performance.now()
            }

        case SET_NAME:
            return {
                ...state,
                name: action.name
            }

        case CREATE_SCORE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                name: "",
                attempts: 1,
                startTime: 0,
                endTime: 0,
                lowestNumber: 1,
                highestNumber: 1000,
                guess: 499
            }

        case CREATE_SCORE_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error,
                name: "",
                attempts: 1,
                startTime: 0,
                endTime: 0,
                lowestNumber: 1,
                highestNumber: 1000,
                guess: 499
            }

        default:
            return state;
    }
};

export default game;