import { combineReducers } from 'redux';
import * as postsReducers from './postsReducers';

export default combineReducers(Object.assign(
  postsReducers
));