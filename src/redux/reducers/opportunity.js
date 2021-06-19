import { GET_ALL_OPPORTUNITIES, GET_ONE_OPPORTUNITY } from '../actions/types';

const initialState = {
  opportunities: [],
  opportunityDetails: {},
};

const opportunityReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_OPPORTUNITIES:
      return { ...state, opportunities: action.payload };
    case GET_ONE_OPPORTUNITY:
      return { ...state, opportunityDetails: action.payload };
    default:
      return state;
  }
};

export default opportunityReducer;
