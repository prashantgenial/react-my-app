import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'
import createSagaMiddleware  from 'redux-saga';
import { wathcSagas } from './saga'

const sagaMiddleware = createSagaMiddleware();

const initialState = {};
const middleware = [thunk,sagaMiddleware];



const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
));

sagaMiddleware.run(wathcSagas);

export default store ;
