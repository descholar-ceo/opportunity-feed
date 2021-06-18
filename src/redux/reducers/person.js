import { GET_ALL_PEOPLE, GET_ONE_PERSON } from '../actions/types';

const initialState = {
  persons: [],
  personDetails: {},
};

const personReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PEOPLE:
      return { ...state, persons: action.payload };
    case GET_ONE_PERSON:
      return { ...state, personDetails: action.payload };
    default:
      return state;
  }
};

export default personReducer;
