import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { url } from './settings';
import './styles/css/app.css';

import Home from './routes/Home';
import SinglePost from './routes/SinglePost';
import Login from './routes/Login';
import Register from './routes/Register';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router basename={url.basename}>
          <div>
            <Route exact={true} path="/" component={Home}/>
            <Route exact={true} path="/post" component={SinglePost}/>
            <Route exact={true} path="/login" component={Login}/>
            <Route exact={true} path="/register" component={Register}/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
