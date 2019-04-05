import { combineReducers } from 'redux';
import postReducer from './postReducer';
import archiveReducer from './archiveReducer';
import 'bootstrap/dist/css/bootstrap.css';

export default combineReducers({
    posts: postReducer,
    archived_posts: archiveReducer
})