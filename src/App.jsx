import React from 'react';
import CreatePosition from './containers/CreatePosition';
import Home from './containers/Home';
import { Provider } from 'react-redux';
import {Switch, Route, BrowserRouter } from 'react-router-dom';
import BaseLayout from './containers/BaseLayout';
import {createStore} from 'redux';
import rootReducer from './store/reducers/rootReducer';
import ConfirmPositions from './containers/ConfirmPositions';

const store = createStore(rootReducer);

const App = function() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <BaseLayout>
            <Route exact path="/" component={Home} />
            <Route exact path="/createPosition" component={CreatePosition} />
            <Route exact path="/confirmPositions" component={ConfirmPositions} />
          </BaseLayout>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
