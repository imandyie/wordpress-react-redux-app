import React, { Component } from 'react';
import '../styles/css/topNavigation.css';
import { url } from '../settings';

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

export default class TopNavigation extends Component {

  componentWillMount() {
    this.state = { navigationPosition: 0 };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll(e) {
    let scrollPosition = 0;
    if (e.srcElement) {
      scrollPosition = e.srcElement.body.scrollTop;
    } else if (e.pageY) {
      scrollPosition = e.pageY;
    }
    this.setState({navigationPosition: scrollPosition});
  }

  render() {
    const classNames = this.state.navigationPosition > 250 ? 'is-scrolling' : '';
    return(
      <div>
        <AppBar
          iconElementLeft={
            <a href={url.react}>
              <div className="logo"></div>
            </a>
          }
          iconElementRight={
            <div className="right-navigation">
              <FlatButton label="Home" />
              <FlatButton label="About Me" />
              <FlatButton label="Contact" />
            </div>
          }
          className={classNames + " top-navigation"}
        />
        <div className={classNames + " top-navigation-bg"}></div>
      </div>
    );
  }
}