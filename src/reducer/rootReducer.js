import { combineReducers } from 'redux';
import gameReducer from '../screens/game/reducer';

export default combineReducers({
    game: gameReducer
});