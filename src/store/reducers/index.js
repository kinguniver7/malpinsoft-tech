import { combineReducers } from 'redux'
import navigation from './navigation';
import content from './content';

export default combineReducers({
  navigation,
  content
  });