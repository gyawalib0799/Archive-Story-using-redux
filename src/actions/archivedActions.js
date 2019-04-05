import {ARCHIVE_POST } from './types';


export const archivedActions =(post)=>dispatch =>
{
    dispatch({
        type: ARCHIVE_POST,
       payload: post,
   });
};