import PropTypes from 'prop-types';

const Person = ({ person }) => {
  const { remoter, picture } = person;
  return (
    <div className="person-row">
      <div className="display-grid td-leftmost">
        <img src={picture} alt="fauser" />
      </div>
      <div className="display-grid centered-content td-middle">{remoter}</div>
      <div className="display-grid td-rightmost" />
    </div>
  );
};

Person.propTypes = {
  person: PropTypes.shape({
    remoter: PropTypes.bool.isRequired,
    picture: PropTypes.shape().isRequired,
  }).isRequired,
};

export default Person;
