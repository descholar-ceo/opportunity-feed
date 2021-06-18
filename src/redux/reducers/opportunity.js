import { GET_ALL_OPPORTUNITIES } from '../actions/types';

const initialState = {
  opportunities: [],
};

const opportunityReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_OPPORTUNITIES:
      return { ...state, opportunities: action.payload };
    default:
      return state;
  }
};

export default opportunityReducer;
