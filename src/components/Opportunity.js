import PropTypes from 'prop-types';
import { FaGlobe } from 'react-icons/fa';

const Opportunity = ({ opportunity }) => {
  const {
    objective,
    type,
    remote,
    locations,
    compensation,
    skills,
    organizations,
  } = opportunity;
  let currency; let minAmount; let maxAmount; let
    periodicity;
  const data = compensation ? compensation.data : null;
  if (data) {
    currency = data.currency;
    minAmount = data.minAmount;
    maxAmount = data.maxAmount;
    periodicity = data.periodicity;
  }
  const mLocations = locations.length !== 0 ? locations.map((loc) => <span className="margin-5" key={loc}>{loc}</span>) : '';
  const skillSet = skills.length !== 0 ? skills.slice(0, 4).map((skill) => {
    const { name } = skill;
    return (
      <button type="button" key="name" className="skill-btn">
        {name}
      </button>
    );
  }) : 'No skillset defined';
  const organizationDefined = organizations.length !== 0 ? (organizations.slice(0, 1).map((org) => {
    const { name, picture } = org;
    return (
      <div key={name}>
        <div>
          <img src={picture} alt={name} />
        </div>
        <p>{name}</p>
      </div>
    );
  })) : '';
  return (
    <div className="display-grid opportunity-row">
      <div className="display-grid td-leftmost">
        <p className="book-category">{ type }</p>
        <h1 className="book-title">{objective}</h1>
        <p className="remote">
          {' '}
          { remote ? (
            <span className="globe">
              <FaGlobe />
              {' '}
              Remote
            </span>
          ) : ''}
        </p>
        <p className="locations">{mLocations}</p>
        <p>
          {(data && compensation) ? (
            <span>
              <span>{currency}</span>
              {' '}
              <span>{minAmount}</span>
              {' '}
              -
              {' '}
              <span>{maxAmount}</span>
              /
              <span>{periodicity}</span>
            </span>
          ) : 'Salary to be defined'}
        </p>
      </div>
      <div className="display-grid centered-content td-middle">
        {skillSet}
      </div>
      <div className="display-grid td-rightmost">
        <h2 className="current-chapter-container">{organizationDefined}</h2>
        <h3>Chapter 17</h3>
        <button className="primary-btn" type="button">View</button>
      </div>
    </div>
  );
};

Opportunity.propTypes = {
  opportunity: PropTypes.shape({
    objective: PropTypes.string,
    type: PropTypes.string,
    remote: PropTypes.bool.isRequired,
    locations: PropTypes.string.isRequired,
    organizations: PropTypes.shape().isRequired,
    skills: PropTypes.shape({
      length: PropTypes.func.isRequired,
      map: PropTypes.func.isRequired,
      slice: PropTypes.func.isRequired,
    }).isRequired,
    compensation: PropTypes.shape({
      data: PropTypes.shape({
        minAmount: PropTypes.string.isRequired,
        periodicity: PropTypes.string.isRequired,
        maxAmount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Opportunity;
