import { FETCH_POSTS,NEW_POSTS,INIT_FETCH_POSTS } from './types';

/*export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then( res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
    }));
};*/

export const initFetchPosts = () => dispatch => {
    dispatch({
            type: INIT_FETCH_POSTS
    });
};

export const fetchPosts = (action) => dispatch => {
    dispatch({
            type: FETCH_POSTS,
            payload: action.payload
    });
};

export const createPosts = (postData) => dispatch => {
    console.log("inside CreatePosts action...")
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then( res => res.json())
    .then(post => dispatch({
        type: NEW_POSTS,
        payload: post
    }));
};