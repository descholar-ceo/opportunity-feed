import PropTypes from 'prop-types';

const Person = ({ person }) => {
  const {
    remoter, picture, name, locationName, professionalHeadline, skills,
  } = person;
  const skillSet = skills.length !== 0 ? (skills.slice(0, 8).map((skill) => {
    const { name } = skill;
    return (
      <button type="button" key={name} className="skill-person-btn">
        {name}
      </button>
    );
  })) : '';
  return (
    <div className="person-row">
      <div className="display-grid td-person-leftmost">
        <img src={picture} alt="fauser" />
      </div>
      <div className="td-person-middle">
        <h1>{name}</h1>
        <p>{professionalHeadline}</p>
        <p>
          From
          {' '}
          {locationName}
        </p>
        <p>{remoter ? 'Can work remotely' : ''}</p>
      </div>
      <div className="display-grid td-person-rightmost">
        <p className="skill-set-container">{skillSet}</p>
      </div>
    </div>
  );
};

Person.propTypes = {
  person: PropTypes.shape({
    remoter: PropTypes.bool.isRequired,
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    locationName: PropTypes.string.isRequired,
    professionalHeadline: PropTypes.string.isRequired,
    skills: PropTypes.shape().isRequired,
  }).isRequired,
};

export default Person;
