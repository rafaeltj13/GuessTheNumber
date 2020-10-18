import { combineReducers } from 'redux';
import gameReducer from '../screens/game/reducer';
import rankingReducer from '../screens/ranking/reducer';

export default combineReducers({
    game: gameReducer,
    ranking: rankingReducer
});