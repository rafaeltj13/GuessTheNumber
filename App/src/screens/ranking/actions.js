import Api from '../../services/api';

export const RANKING_ASYNC_REQUEST_STARTED = 'RANKING_ASYNC_REQUEST_STARTED';
export const rankingAsyncRequestStarted = () => ({
    type: RANKING_ASYNC_REQUEST_STARTED,
});

export const GET_SCORES_SUCCESS = 'GET_SCORES_SUCCESS';
export const getScoresSuccess = data => ({
    type: GET_SCORES_SUCCESS,
    data
});

export const GET_SCORES_FAILED = 'GET_SCORES_FAILED';
export const getScoresFailed = error => ({
    type: GET_SCORES_FAILED,
    error
});

export const GET_SCORES_REQUEST = 'GET_SCORES_REQUEST';
export const getScoresRequest = () => {
    return dispath => {
        dispath(rankingAsyncRequestStarted());

        Api.get('scores')
            .then(({ data }) => {
                dispath(getScoresSuccess(data))
            })
            .catch(({ message }) => {
                dispath(getScoresFailed(message))
            });
    };
};

