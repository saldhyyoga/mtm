import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './helper/PrivateRoute';
// import { renderRoutes } from 'react-router-config';
import './App.scss';
import Loading from './loading';

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/Pages/Login'));
// const Register = React.lazy(() => import('./views/Pages/Register'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       value: ""
    }
  }
  

  render() {  
    return (
      <HashRouter>
          <React.Suspense fallback={<Loading />}>
            <Switch>
            <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <PrivateRoute path="/" name="Home" component={DefaultLayout} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
