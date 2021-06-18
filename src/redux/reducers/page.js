import { CHANGE_PAGE } from '../actions/types';

const initialState = 1;

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return action.page;
    default:
      return state;
  }
};

export default pageReducer;
