import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Person = ({ person }) => {
  const {
    remoter,
    picture,
    name,
    locationName,
    professionalHeadline,
    skills,
    openTo,
    compensations,
    username,
  } = person;
  const skillSet = skills.length !== 0 ? (skills.slice(0, 4).map((skill) => {
    const { name } = skill;
    return (
      <button type="button" key={name} className="skill-person-btn">
        {name}
      </button>
    );
  })) : '';
  const comps = compensations.length !== 0 ? (Object.keys(compensations).map((opn) => {
    const { amount, currency, periodicity } = compensations[opn];
    return (
      <button type="button" key={opn} className="skill-person-btn">
        <span className="opn-span">{opn}</span>
        {currency}
        {amount}
        {periodicity}
      </button>
    );
  })) : '';
  const openTos = openTo.length !== 0 ? (openTo.slice(0, 4).map((opn) => (
    <button type="button" key={opn} className="skill-person-btn">
      {opn}
    </button>
  ))) : '';
  return (
    <Link to={`/people/details/${username}`}>
      <div className="person-row">
        <div className="display-grid td-person-leftmost">
          <img src={picture || 'https://res.cloudinary.com/descholar/image/upload/v1619552670/n7cdvpeomukfih68zzcz.svg'} alt="fauser" />
        </div>
        <div className="td-person-middle">
          <h1>{name}</h1>
          <p>{professionalHeadline}</p>
          <p className="location-name">
            From
            {' '}
            {locationName}
          </p>
          <p className="work-remote">{remoter ? 'Can work remotely' : ''}</p>
          <p className="pricing-container">{comps}</p>
        </div>
        <div className="display-grid td-person-rightmost">
          <div className="skill-set-container">
            <h4>Skills:</h4>
            <p>{skillSet}</p>
          </div>
          <div className="open-to-container">
            {openTo.length !== 0 ? <h4>Open To:</h4> : ''}
            <p>{openTos}</p>
          </div>
        </div>
      </div>
    </Link>
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
    openTo: PropTypes.shape().isRequired,
    compensations: PropTypes.shape().isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
};

export default Person;
