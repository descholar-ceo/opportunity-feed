import PropTypes from 'prop-types';

const PersonDetails = ({ match: { params } }) => {
  const { username } = params;
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
};

export default PersonDetails;
