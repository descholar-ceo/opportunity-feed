import { GET_ALL_PEOPLE } from '../actions/types';

const initialState = {
  persons: [],
};

const personReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PEOPLE:
      return { ...state, persons: action.payload };
    default:
      return state;
  }
};

export default personReducer;
