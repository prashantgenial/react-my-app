import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions';
import { fetchPostsSaga } from './post';

export function* wathcSagas(){
    yield takeEvery(actionTypes.INIT_FETCH_POSTS,fetchPostsSaga);
}