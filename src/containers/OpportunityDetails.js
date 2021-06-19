import { connect } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getOneOpportunity } from '../redux/actions';
import Loading from '../components/Loading';

const OpportunityDetails = ({ getOneOpportunity, opportunity, match: { params } }) => {
  const { id } = params;
  useEffect(() => getOneOpportunity(id), []);
  if (opportunity.details) {
    const {
      objective, organizations, compensation, place, languages, strengths, members,
    } = opportunity;
    const organizationToDisplay = organizations.length !== 0 ? (organizations.slice(0, 4)
      .map((org) => {
        const { name, picture } = org;
        return (
          <div key={name} className="organization-card">
            <img src={picture} alt={name} />
            <h2>{name}</h2>
          </div>
        );
      })) : '';
    const locationToDisplay = place.location.length !== 0 ? (place.location.map((loc) => {
      const { id: name } = loc;
      return (<div key={name}>{name}</div>);
    })) : '';
    const languageToDisplay = languages.length !== 0 ? (languages.map((lang) => {
      const { fluency, language: { name } } = lang;
      return (
        <div key={name}>
          <span>{name}</span>
          <span>: </span>
          <span>{fluency}</span>
        </div>
      );
    })) : '';
    const strengthToDisplay = strengths.length !== 0 ? (strengths.map((strng) => {
      const { name, experience } = strng;
      return (
        <div key={name}>
          <span>{name}</span>
          <span>: </span>
          <span>{experience}</span>
        </div>
      );
    })) : '';
    const memberToDisplay = members.length !== 0 ? (members.map((membr) => {
      const { person: { name, professionalHeadline, pictureThumbnail } } = membr;
      return (
        <div key={name}>
          <img src={pictureThumbnail} alt={name} />
          <h1>{name}</h1>
          <h2>{professionalHeadline}</h2>
        </div>
      );
    })) : '';
    return (
      <div>
        <h1>{objective}</h1>
        <div>
          <div>{organizationToDisplay}</div>
        </div>
        <div>
          {compensation ? (
            <div>
              <span>{compensation.currency}</span>
              <span>{compensation.minAmount}</span>
              <span> - </span>
              <span>{compensation.maxAmount}</span>
              <span>{' '}</span>
              <span>{compensation.periodicity}</span>
            </div>
          ) : ''}
        </div>
        <div>{place.remote ? 'Remote' : ''}</div>
        <div>{locationToDisplay || ''}</div>
        <div>{languageToDisplay || ''}</div>
        <div>{strengthToDisplay || ''}</div>
        <div>{memberToDisplay || ''}</div>
      </div>
    );
  }
  return (<Loading />);
};

OpportunityDetails.propTypes = {
  getOneOpportunity: PropTypes.func.isRequired,
  opportunity: PropTypes.shape().isRequired,
  match: PropTypes.shape().isRequired,
};
const mapStateToProps = (state) => ({ opportunity: state.opportunity.opportunityDetails });

export default connect(mapStateToProps, { getOneOpportunity })(OpportunityDetails);
