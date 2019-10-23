import { put } from 'redux-saga/effects';
import * as actionTypes from '../actions';

export function* fetchPostsSaga(){
    try{
        let response = yield fetch('https://jsonplaceholder.typicode.com/posts');
        response = yield response.json();
        yield put(actionTypes.fetchPosts({payload:response}));
    }
    catch(error){
        console.log(error);
    }    
}