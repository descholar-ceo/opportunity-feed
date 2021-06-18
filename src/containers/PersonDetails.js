import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getOnePerson } from '../redux/actions';

const PersonDetails = ({ getOnePerson, match: { params } }) => {
  const { username } = params;
  useEffect(() => getOnePerson(username), []);
  return (
    <div><h1>{username}</h1></div>
  );
};

PersonDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  getOnePerson: PropTypes.func.isRequired,
};

export default connect(null, { getOnePerson })(PersonDetails);
