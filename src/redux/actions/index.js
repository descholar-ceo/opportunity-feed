import axios from 'axios';
import {
  CHANGE_FILTER, GET_ALL_OPPORTUNITIES, GET_ALL_PEOPLE, GET_ERRORS,
} from './types';

export const getAllPeople = () => async (dispatch) => {
  try {
    const res = await axios.post('https://search.torre.co/people/_search/?offset=1&size=20', {});
    dispatch({ type: GET_ALL_PEOPLE, payload: res.data });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err,
    });
  }
};

export const getAllOpportunities = () => async (dispatch) => {
  try {
    const res = await axios.post('https://search.torre.co/opportunities/_search/?offset=1&size=20', {});
    dispatch({ type: GET_ALL_OPPORTUNITIES, payload: res.data });
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
