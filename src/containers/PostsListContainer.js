import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostsListItem from '../components/PostsListItem';
import '../styles/css/postsList.css';

class PostsListContainer extends Component {
  render() {
    let postItems = [];
    const posts = this.props.posts;

    for(var i = 0; i < posts.length; i++) {
      postItems.push(
        <PostsListItem
          title={posts[i].title.rendered}
          featuredImage={posts[i].featured_media_url}
          permalink={posts[i].slug}
          shortDescription={posts[i].short_description} 
        />
      );
    }

    return(
      <div className="posts-list">
        {postItems}
      </div>
    );
  }
}

PostsListContainer.propTypes = {
  posts: PropTypes.array.isRequired,
}

export default PostsListContainer;