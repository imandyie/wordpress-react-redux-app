import createReducer from '../helpers/createReducer'
import * as types from '../actions/actionTypes'

export const homePosts = createReducer([], {
  [types.SET_HOME_POSTS](state, action) {
    return action.posts;
  }
});

export const singlePost = createReducer({}, {
  [types.SET_SINGLE_POST](state, action) {
    return action.singlePost;
  }
});