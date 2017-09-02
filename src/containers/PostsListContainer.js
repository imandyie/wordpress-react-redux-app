import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostsListItem from '../components/PostsListItem';
import '../styles/css/postsList.css';

class PostsListContainer extends Component {
  render() {
    let postItems = [];
    const posts = this.props.posts;

    posts.map((item, index) =>
      postItems.push(
        <PostsListItem
          key={index}
          title={item.title.rendered}
          featuredImage={item.featured_media_url}
          permalink={item.slug}
          shortDescription={item.short_description} 
        />
      )
    );

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