import * as types from './actionTypes';
import { url, homePage } from '../settings';
import axios from 'axios';

export function fetchHomePosts(postsNumber, postsType, pageNumber) {
  const apiUrl = url.api + '/' + url.posts 
                 + '?per_page=' + homePage.postsPerPage 
                 + '&page=' + homePage.pageNumber
                 + '&order=' + homePage.order
                 + '&orderBy=' + homePage.orderBy
  return (dispatch, getState) => {
      axios.get(apiUrl).then(function (response) {
        console.log(response);
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