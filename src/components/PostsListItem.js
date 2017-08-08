import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class PostsListItem extends Component {

  render() {
    return(
      <div className="post-row row">
        <div className="col-md-4">
          <Paper className="paper" zDepth={2} children={
            <img src={this.props.featuredImage} alt={this.props.title} />
          } />
        </div>
        <div className="post-right col-md-8">
          <h3><Link to={"/post/" + this.props.permalink}>{this.props.title}</Link></h3>
          <div className="row">
            <div
              className="post-description col-md-12" 
              dangerouslySetInnerHTML={ {__html: this.props.shortDescription} }
            />
          </div>
        </div>
      </div>
    );
  }
}

PostsListItem.propTypes = {
  title: PropTypes.string.isRequired,
  featuredImage: PropTypes.string.isRequired,
  permalink: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
}

export default PostsListItem;