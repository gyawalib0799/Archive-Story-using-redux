import {ARCHIVE_POST } from '../actions/types';

const initialState ={
    archive_posts: []
};
export default function(state=initialState, action){ 
    switch(action.type){
        case ARCHIVE_POST:
        console.log(state);
            return{
                ...state,
                archive_posts: [ ...state.archive_posts, action.payload ]
            }
        default:
        return state; 

    }
}