import {FETCH_POSTS, DELETE_POST } from './types';


export const fetchPosts = searchtext=>dispatch=>{ 
    console.log (searchtext);
    fetch (`https://hn.algolia.com/api/v1/search?query=${searchtext}`)
        .then(res=>res.json())
        .then(posts=>dispatch({
            type: FETCH_POSTS,
           payload: posts.hits,
       }));
    
}

export const deletePost = post=>dispatch=>{ 
    
    dispatch({
            type: DELETE_POST,
           payload: post,
       });
    
}