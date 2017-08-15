import React, { Component } from 'react';
import '../styles/css/header.css';
import PropTypes from 'prop-types';

let headerPosition = 0
class Header extends Component {

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
    headerPosition = scrollPosition / 3;
  }

  render() {
    const transformHeader = {
      'transform':'translate3d(0,' + headerPosition +'px,0)',
      'WebkitTransform':'translate3d(0,' + headerPosition +'px,0)',
      'msTransform':'translate3d(0,' + headerPosition +'px,0)',
      'OTransform':'translate3d(0,' + headerPosition +'px,0)'
    };
    const headerStyle = {backgroundImage: "url("+this.props.image+")", height: this.props.height};

    let combineStyles = headerStyle;
    if (this.props.parallax) {
      combineStyles = Object.assign(headerStyle,transformHeader);
    }
    const clonedStyle = Object.assign({}, combineStyles);

    return(
      <div style={clonedStyle} className="large-header">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h3>{this.props.title}</h3>
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  parallax: PropTypes.bool,
  height: PropTypes.number.isRequired
}

export default Header;