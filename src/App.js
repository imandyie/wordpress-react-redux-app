import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { url } from './settings';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './styles/css/app.css';
import './styles/css/responsive.css';

import TopNavigation from './components/TopNavigation';

import Home from './routes/Home';
import SinglePost from './routes/SinglePost';
import Login from './routes/Login';
import Register from './routes/Register';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: true };
    this.handleStoreChange = this.handleStoreChange.bind(this);
  }

  componentDidMount() {
    this.unsubscribeStore = store.subscribe(this.handleStoreChange);
  }

  componentWillUnmount() {
    this.unsubscribeStore();
  }

  handleStoreChange() {
    let isLoadingState = store.getState().inProgress;
    if (isLoadingState !== this.state.isLoading) {
      this.setState({ isLoading: isLoadingState });
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <TopNavigation />
          <Provider store={store}>
            <Router basename={url.basename}>
              <div>
                <Route exact={true} path="/" component={Home}/>
                <Route exact={true} path="/post/:slug" render={({ match }) => (
                  <SinglePost postSlug={match.params.slug}/>
                )}/>
                <Route exact={true} path="/login" component={Login}/>
                <Route exact={true} path="/register" component={Register}/>
              </div>
            </Router>
          </Provider>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
