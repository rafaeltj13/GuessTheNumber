import Api from '../../services/api';

export const GAME_ASYNC_REQUEST_STARTED = 'GAME_ASYNC_REQUEST_STARTED';
export const gameAsyncRequestStarted = () => ({
    type: GAME_ASYNC_REQUEST_STARTED,
});

export const ADD_ATTEMPT = 'ADD_ATTEMPT';
export const addAttemptRequest = highOrLow => ({
    type: ADD_ATTEMPT,
    highOrLow
});

export const ADD_GUESS = 'ADD_GUESS';
export const addGuessRequest = (step, tip) => ({
    type: ADD_GUESS,
    step,
    tip
});

export const SET_TIMER = 'SET_TIMER';
export const setTimerRequest = time => ({
    type: SET_TIMER,
    time
});

export const SET_NAME = 'SET_NAME';
export const setNameRequest = name => ({
    type: SET_NAME,
    name
});

export const CREATE_SCORE_SUCCESS = 'CREATE_SCORE_SUCCESS';
export const createScoreSuccess = data => ({
    type: CREATE_SCORE_SUCCESS,
    data
});

export const CREATE_SCORE_FAILED = 'CREATE_SCORE_FAILED';
export const createScoreFailed = error => ({
    type: CREATE_SCORE_FAILED,
    error
});

export const CREATE_SCORE_REQUEST = 'CREATE_SCORE_REQUEST';
export const createScoreRequest = scoreBody => {
    return dispath => {
        dispath(gameAsyncRequestStarted());

        Api.post('scores', scoreBody)
            .then(({ data }) => {
                dispath(createScoreSuccess(data))
            })
            .catch(({ message }) => {
                dispath(createScoreFailed(message))
            });
    };
};

