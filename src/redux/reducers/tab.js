import { CHANGE_TAB } from '../actions/types';

const initialState = 'opportunity';

const tabReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TAB:
      return action.tab;
    default:
      return state;
  }
};

export default tabReducer;
