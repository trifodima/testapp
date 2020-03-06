import { combineReducers } from 'redux';
import positionsReducer from './positionsReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  positionsReducer,
  form: formReducer,
});
