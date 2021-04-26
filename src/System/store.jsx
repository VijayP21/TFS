import { createStore, applyMiddleware } from 'redux';
import allReducers from '../System/reducer';
import thunk from 'redux-thunk';

export default function configStore() {
    return createStore(
        allReducers,
        applyMiddleware(thunk)
    )

}