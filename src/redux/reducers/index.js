import { combineReducers } from 'redux';
import personReducer from './person';
import opportunityReducer from './opportunity';
import pageReducer from './page';
import tabReducer from './tab';
import filterReducer from './filter';

export default combineReducers({
  person: personReducer,
  opportunity: opportunityReducer,
  page: pageReducer,
  tab: tabReducer,
  filter: filterReducer,
});
