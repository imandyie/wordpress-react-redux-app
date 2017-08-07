import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'

import Header from '../components/Header';

let headerBgImage = require('../img/bg.jpg');

class Home extends Component {

  componentWillMount() {
    if (!this.props.homePosts.length) {
      this.props.fetchHomePosts();
    }
  }

  render() {
    return(
      <div>
        <Header
          image={headerBgImage} 
          title="Welcome To GNOME" 
          parallax={true} 
          height={500}
        />
        <div className="raised-wrapper">
          <div className="container page-content">
            <section id="main-content" className="row">
              <div className="col-lg-8 col-md-12 col-sm-12">
                Main Content
              </div>
              <div className="sidebar-container col-lg-4 col-md-12 col-sm-12">
                Sidebar
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
    homePosts: state.homePosts,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home); 