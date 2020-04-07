import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import GlobalStyle from './style';
import GlobalFonts from './statics/font/fonts';
import Login from './Pages/Login';
import LoginDetail from './Pages/LoginDetail';
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
          </div>
          <GlobalFonts />
        </Router>
      </Provider>
      <GlobalStyle />
    </div>
  );
}

export default App;
