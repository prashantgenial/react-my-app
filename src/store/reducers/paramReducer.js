import { GET_PARAMS } from '../actions/types';
import { UtilityObject } from '../utility'

const initialState = {
    params:[]
}

export default function(state = initialState,action){
    switch(action.type){
        case GET_PARAMS: return UtilityObject(state,{params:action.payload});                
        default: return state ;
    }
}