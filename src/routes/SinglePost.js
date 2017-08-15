import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import { url } from '../settings';

import Header from '../components/Header';
import '../styles/css/singlePost.css';
import '../styles/css/sidebar.css';

class SinglePost extends Component {

  componentWillMount() {
    const postSlug = this.props.postSlug;
    this.props.fetchSinglePost(postSlug);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this.props.setSinglePost({singlePost: {}});
  }

  render() {
    const singlePost = this.props.singlePost;
    const postTitle = singlePost && singlePost.title ? singlePost.title.rendered : '';
    const postContent = singlePost && singlePost.content ? singlePost.content.rendered : '';
    const postImage = singlePost && singlePost.featured_media_url_large ? singlePost.featured_media_url_large : '';
    return(
      <div>
        <Header
          image={postImage}
          parallax={false}
          height={400}
        />
        <div className="post-wrapper">
          <div className="container page-content">
            <section id="main-content" className="row">
              <div className="single-post-wrapper col-lg-8 col-md-12 col-sm-12">
                <div className="post-content">
                  <h1>{postTitle}</h1>
                  <div dangerouslySetInnerHTML={ {__html: postContent} } />
                </div>
              </div>
              <div className="sidebar-container col-lg-4 col-md-12 col-sm-12">
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    singlePost: state.singlePost
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost); 