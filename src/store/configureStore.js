import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer/rootReducer';

const configureStore = preloadedState => {
    const composeEnhancer = compose;
    const store = createStore(rootReducer, preloadedState, composeEnhancer(applyMiddleware(thunk)));

    return store;
};

export default configureStore