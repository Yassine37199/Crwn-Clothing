import { createStore , applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import persistStore from "redux-persist/es/persistStore";
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";

const middlewares = [thunk];

if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger); 
}

const composedStore = compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(
    rootReducer , 
    composedStore)

export const persistor = persistStore(store)

export default store;