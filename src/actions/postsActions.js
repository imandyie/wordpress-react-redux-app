import * as types from './actionTypes';

export function setHomePosts({ posts }) {
  return {
    type: types.SET_HOME_POSTS,
    posts,
  }
}