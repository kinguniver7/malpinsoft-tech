import React from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './components/Home';
import PageContent from './components/content/PageContent';
import PageNotFound from './components/common/PageNotFound';

import {store} from "./store/store";

import './App.scss';

function App() {
  
  return (
    <Provider store={store}>
      <Router>   
        <Switch>
          <Route exact  path="/" component={Home} />   
          <Route path="/page" >
            <PageContent/>
          </Route>
                
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
