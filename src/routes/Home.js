import React, { Component } from 'react';
import Header from '../components/Header';

let headerBgImage = require('../img/bg.jpg');

class Home extends Component {

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

export default Home;  