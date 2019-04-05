import {FETCH_POSTS, DELETE_POST } from '../actions/types';


// NEW_POSTS
const initialState ={
    items:[],
    item:{}
}

export default function(state=initialState, action){ //action has to have a type
    switch(action.type){
        case FETCH_POSTS:
            return{
                ...state,
                items: action.payload
            }
            case DELETE_POST:
            return{
                ...state,
                items: state.items.filter((item) => action.payload.objectID !== item.objectID)
            }
        default:
        return state; // returns current state

    }
}