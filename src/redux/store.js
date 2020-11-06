import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { fetchServiceInfoEpic, fetchSevricesEpic, initFectchEpic, initFetchServiceInfoEpic } from '../epic/servicesEpic';

import servicesReducer from  './reducers/servicesReducer';

const reducer = combineReducers({ servicesReducer });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epic = combineEpics(
	initFectchEpic,
	fetchSevricesEpic,
	initFetchServiceInfoEpic,
	fetchServiceInfoEpic,
);
const epicMiddleware = createEpicMiddleware();
const store = createStore(reducer, composeEnhancers(
	applyMiddleware(epicMiddleware)
));
epicMiddleware.run(epic);
export default store;