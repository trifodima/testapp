import { combineReducers } from 'redux';
import newsReducer from './newsReducer';
import userReducer from './userReducer';

import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  newsReducer,
  userReducer,
  form: formReducer,
});
