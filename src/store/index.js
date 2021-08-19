import {createStore, compose, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./weatherReducer";
import rootSaga from "./rootSaga";
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const sagaMiddleware = createSagaMiddleware()
const configureStore = () => {

    const middleware = [sagaMiddleware];
    const enhancers = [applyMiddleware(...middleware)]
    const store = createStore(rootReducer,composeEnhancers(...enhancers));
    sagaMiddleware.run(rootSaga)
    return store;
};
export default configureStore;