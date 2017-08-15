import * as types from './actionTypes';
import { url, homePage } from '../settings';
import axios from 'axios';

export function fetchHomePosts(postsNumber, postsType, pageNumber) {
  const apiUrl = url.api + '/wp/v2/' + url.posts 
                 + '?per_page=' + homePage.postsPerPage 
                 + '&page=' + homePage.pageNumber
                 + '&order=' + homePage.order
                 + '&orderBy=' + homePage.orderBy
  return (dispatch, getState) => {
      axios.get(apiUrl).then(function (response) {
        dispatch(setHomePosts({posts: response.data}));
      }).catch(function (error) {
        console.log(error);
      });
  }
}

export function setHomePosts({ posts }) {
  return {
    type: types.SET_HOME_POSTS,
    posts,
  }
}

export function fetchSinglePost(postSlug) {
  const apiUrl = url.api + '/wp/v2/' + url.posts
                 + '?slug=' + postSlug
  return (dispatch, getState) => {
      axios.get(apiUrl).then(function (response) {
        dispatch(setSinglePost({singlePost: response.data[0]}));
      }).catch(function (error) {
        console.log(error);
      });
  }
}

export function setSinglePost({ singlePost }) {
  return {
    type: types.SET_SINGLE_POST,
    singlePost,
  }
}