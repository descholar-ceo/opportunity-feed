import axios from 'axios';
import {
  CHANGE_PAGE,
  CHANGE_TAB,
  GET_ALL_OPPORTUNITIES,
  GET_ALL_PEOPLE,
  GET_ERRORS,
  GET_ONE_OPPORTUNITY,
  GET_ONE_PERSON,
} from './types';

export const getAllPeople = (page) => async (dispatch) => {
  try {
    const res = await axios.post(`https://search.torre.co/people/_search/?offset=${page}&size=15`, {});
    dispatch({ type: GET_ALL_PEOPLE, payload: res.data });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err,
    });
  }
};

export const getOnePerson = (username) => async (dispatch) => {
  try {
    const res = await axios.get(`https://opportunity-feed-backend.herokuapp.com/person-details/${username}`);
    dispatch({ type: GET_ONE_PERSON, payload: res.data });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err,
    });
  }
};

export const getAllOpportunities = (page) => async (dispatch) => {
  try {
    const res = await axios.post(`https://search.torre.co/opportunities/_search/?offset=${page}&size=15`, {});
    dispatch({ type: GET_ALL_OPPORTUNITIES, payload: res.data });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err,
    });
  }
};

export const getOneOpportunity = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`https://opportunity-feed-backend.herokuapp.com/opportunity-details/${id}`);
    dispatch({ type: GET_ONE_OPPORTUNITY, payload: res.data });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err,
    });
  }
};

export const changePage = (page) => (dispatch) => {
  dispatch({ type: CHANGE_PAGE, page });
};

export const changeTab = (tab) => (dispatch) => {
  dispatch({ type: CHANGE_TAB, tab });
};
