import { combineReducers } from 'redux';
import personReducer from './person';
import opportunityReducer from './opportunity';
import filterReducer from './filter';

export default combineReducers({
  person: personReducer,
  opportunity: opportunityReducer,
  filter: filterReducer,
});
