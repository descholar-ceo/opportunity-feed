import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getOnePerson } from '../redux/actions';
import Loading from '../components/Loading';

const PersonDetails = ({ getOnePerson, person, match: { params } }) => {
  const { username } = params;
  useEffect(async () => getOnePerson(username), []);

  if (person.person) {
    const {
      person: {
        name,
        professionalHeadline,
        location,
        pictureThumbnail,
      }, strengths, interests, languages, jobs, education,
    } = person;
    const strenghtDisplay = strengths.length !== 0 ? (strengths.slice(0, 5).map((stren) => {
      const { name } = stren;
      return (<button className="skill-person-btn" key={name} type="button">{name}</button>);
    })) : '';
    const interestDisplay = interests.length !== 0 ? (interests.slice(0, 5).map((inter) => {
      const { name } = inter;
      return (<button className="skill-person-btn" key={name} type="button">{name}</button>);
    })) : '';
    const languageDisplay = languages.length !== 0 ? (languages.slice(0, 5).map((lang) => {
      const { language, fluency } = lang;
      return (
        <button className="skill-person-btn" key={name} type="button">
          <span>{language}</span>
          <span>: </span>
          <span>{fluency}</span>
        </button>
      );
    })) : '';
    const experienceToDisplay = jobs.length !== 0 ? (jobs.slice(0, 3).map((exper) => {
      const {
        name, fromMonth, fromYear, toMonth, toYear, organizations, responsibilities,
      } = exper;
      const respoDisplay = responsibilities.length !== 0 ? (responsibilities.map((respo) => <button className="skill-person-btn" key={respo} type="button">{respo}</button>)) : '';
      const organizationName = organizations.length !== 0 ? organizations[0] : '';
      return (
        <div key={name} className="one-experience-row">
          <h1>{name}</h1>
          <h2>{organizationName.name}</h2>
          <h3>
            <span>
              {fromMonth}
              {', '}
              {fromYear}
            </span>
            {' - '}
            <span>
              {toMonth}
              {', '}
              {toYear}
            </span>
          </h3>
          <p>{respoDisplay}</p>
        </div>
      );
    })) : '';
    const educationToDisplay = education.length !== 0 ? (education.slice(0, 4).map((educ) => {
      const {
        name, fromYear, toYear, organizations, responsibilities,
      } = educ;
      const respoDisplay = responsibilities.length !== 0 ? (responsibilities.map((respo) => <button className="skill-person-btn" key={respo} type="button">{respo}</button>)) : '';
      const organizationName = organizations.length !== 0 ? organizations[0] : '';
      return (
        <div key={name} className="one-experience-row">
          <h1>{name}</h1>
          <h2>{organizationName.name}</h2>
          <h3>
            <span>
              {fromYear}
            </span>
            {' - '}
            <span>
              {toYear}
            </span>
          </h3>
          <p>{respoDisplay}</p>
        </div>
      );
    })) : '';

    return (
      <div className="person-profile-container">
        <div className="person-address">
          <div className="headline">
            <div>
              <img src={pictureThumbnail} alt={name} />
              <h1>{name}</h1>
            </div>
            <h2>{professionalHeadline}</h2>
            <h3>{location.country}</h3>
          </div>

          <div>
            <h5>
              Strong in:
            </h5>
            <p>
              {strenghtDisplay}
            </p>
          </div>
          <div>
            <h5>
              Interested in:
            </h5>
            <p>
              {interestDisplay}
            </p>
          </div>
          <div>
            <h5>
              Languages:
            </h5>
            <p>
              {languageDisplay}
            </p>
          </div>
        </div>
        <div className="person-experience">
          <h1>Experience</h1>
          {experienceToDisplay}
        </div>
        <div className="person-experience">
          <h1>Education</h1>
          {educationToDisplay}
        </div>
      </div>
    );
  } return <Loading />;
};

PersonDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  getOnePerson: PropTypes.func.isRequired,
  person: PropTypes.shape().isRequired,
};

const mapStateToProps = (state) => ({ person: state.person.personDetails });

export default connect(mapStateToProps, { getOnePerson })(PersonDetails);
