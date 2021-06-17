import axios from 'axios';
import {
  CHANGE_PAGE, GET_ALL_OPPORTUNITIES, GET_ALL_PEOPLE, GET_ERRORS,
} from './types';

export const getAllPeople = () => async (dispatch) => {
  try {
    const res = await axios.post('https://search.torre.co/people/_search/?offset=10&size=10', {});
    dispatch({ type: GET_ALL_PEOPLE, payload: res.data });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err,
    });
  }
};

export const getAllOpportunities = (page) => async (dispatch) => {
  try {
    const res = await axios.post(`https://search.torre.co/opportunities/_search/?offset=${page}&size=10`, {});
    dispatch({ type: GET_ALL_OPPORTUNITIES, payload: res.data });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err,
    });
  }
};

export const changeFilter = (page) => ({
  type: CHANGE_PAGE,
  page,
});
