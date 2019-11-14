import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';


import Navbar from './components/Navbar';
import Register from './components/Register';
import ConfirmAccount from './components/ConfirmAccount';
import Login from './components/Login';
import Home from './components/Main/Home';
import PrivateRoute from './components/Routing/PrivateRoute'
import PublicRoute from './components/Routing/PublicRoute'


import 'bootstrap/dist/css/bootstrap.min.css';
import FirstPage from './components/FirstPage';
import AccountDetail from './components/Main/AccountDetail';

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Navbar />
            <section>
              <Switch>
              <PublicRoute exact path="/" component={FirstPage} />
              <PublicRoute exact path="/register" component={Register} />
              <PublicRoute exact path="/login" component={Login} />
              <PublicRoute exact path="/confirm" component={ConfirmAccount} />
              </Switch>
            </section>

            <section>
              <Switch>
                <PrivateRoute exact path="/home" component={Home} />
                <PrivateRoute exact path="/myAccount" component={AccountDetail} />

              </Switch>
            </section>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
