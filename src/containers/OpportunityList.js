import { connect } from 'react-redux';
import { FaUser } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Opportunity from '../components/Opportunity';
import Loading from '../components/Loading';

const OpportunityList = ({ opportunities, page }) => {
  const opportunitiesToDisplay = opportunities.results;
  const numberOfPages = Math.ceil(opportunities.total / 10);
  const opportunityRows = opportunitiesToDisplay ? (opportunitiesToDisplay.map((opportunity) => (
    <Opportunity
      key={`opportunity-number-${opportunity.id}`}
      opportunity={opportunity}
    />
  ))) : (<Loading />);
  return (
    <div>
      <div className="header">
        <div className="nav display-grid">
          <div className="nav-left display-flex centered-content">
            <h1 className="primary-text">Opportunity Feed</h1>
            <h4>Opportunities</h4>
            <h4>People</h4>
          </div>
          <div className="display-grid centered-content nav-user-container">
            <FaUser className="blue-text" />
          </div>
        </div>
      </div>
      <div className="list-container">
        {opportunityRows}
      </div>
      <div className="control-btns-container">
        <button type="button" className="previous-btn">
          Previous page
          {' '}
          {`${page - 1} / ${numberOfPages}`}
        </button>
        <button type="button" className="next-btn">
          Next page
          {' '}
          {`${page + 1} / ${numberOfPages}`}
        </button>
      </div>
    </div>
  );
};
OpportunityList.propTypes = {
  opportunities: PropTypes.arrayOf(PropTypes.object).isRequired,
  page: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  opportunities: state.opportunity.opportunities,
  page: state.page,
});

// const mapDispatchToProps = dispatch => ({
//   removeBook: book => dispatch(removeBookAction(book)),
//   changeFilter: filter => dispatch(changeFilter(filter)),
// });

export default connect(mapStateToProps, null)(OpportunityList);
