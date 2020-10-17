import { ADD_ATTEMPT, ADD_GUESS, SET_TIMER } from './actions';
import { getIntervalSearch, getGuessValue } from '../../utils/utilFunctions';

const initialState = {
    loading: false,
    error: null,
    attempts: 0,
    startTime: 0,
    endTime: 0,
    lowestNumber: 1,
    highestNumber: 1000,
    guess: 499
};

const game = (state = initialState, action) => {
    switch (action.type) {
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

        default:
            return state;
    }
};

export default game;