import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducers';

const logMiddleware = ({ getState }) => (next) => (action) => {
	// eslint-disable-next-line no-console
	console.log(action.type, getState());
	return next(action);
};

export const store = createStore(reducer, applyMiddleware(logMiddleware));
