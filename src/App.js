import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import GlobalStyle from './style';
import Iconfont from './statics/iconfont/iconfont';
import GlobalFonts from './statics/font/fonts';
import Login from './Pages/Login';
import LoginDetail from './Pages/LoginDetail';
import Header from './Common/Header';
import Home from './Pages/Home';
import Accounts from './Pages/Accounts';
import Budget from './Pages/Budget';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route path="/" exact>
              <Login />
            </Route>
            <Route path="/login" exact>
              <LoginDetail />
            </Route>
            <Route path="/main">
              <Header></Header>
              <Switch>
                <Route path="/main"  exact>
                  <Home></Home>
                </Route>
                <Route path="/main/accounts" exact>
                  <Accounts></Accounts>
                </Route>
                <Route path="/main/budget" exact>
                  <Budget></Budget>
                </Route>
              </Switch>
            </Route>
          </div>
          <GlobalFonts />
        </Router>
      </Provider>
      <GlobalStyle />
      <Iconfont />
    </div>
  );
}

export default App;
