import { combineReducers } from 'redux';
import personReducer from './person';
import opportunityReducer from './opportunity';
import pageReducer from './page';

export default combineReducers({
  person: personReducer,
  opportunity: opportunityReducer,
  page: pageReducer,
});
