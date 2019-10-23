import { FETCH_POSTS,NEW_POSTS } from '../actions/types';
import { UtilityObject } from '../utility'

const initialState = {
    items:[],
    item:{}
}

export default function(state = initialState,action){
    switch(action.type){
        case FETCH_POSTS: return UtilityObject(state,{items:action.payload});            
        case NEW_POSTS: return UtilityObject(state,{item:action.payload});                
        default: return state ;
    }
}