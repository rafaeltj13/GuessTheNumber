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