import axios from 'axios';
import { CHANGE_FILTER, GET_ALL_PEOPLE, GET_ERRORS } from './types';

export const getAllPeople = () => async (dispatch) => {
  let people;
  try {
    people = await axios.post('https://search.torre.co/opportunities/_search/?offset=1&size=20', {});
    console.log(people);
    dispatch({ type: GET_ALL_PEOPLE, payload: people.data });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err,
    });
  }
};

export const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  filter,
});
