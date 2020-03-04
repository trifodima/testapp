import React from 'react';
import CreatePosition from './containers/CreatePosition';
import Home from './containers/Home';
import { Provider } from 'react-redux';
import {Switch, Route, BrowserRouter } from 'react-router-dom';
import BaseLayout from './containers/BaseLayout';
import {createStore} from 'redux';
import reducer from './store/reducers/reducer';

const store = createStore(reducer);

const App = function() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <BaseLayout>
            <Route exact path="/" component={Home} />
            <Route exact path="/createPosition" component={CreatePosition} />
          </BaseLayout>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
