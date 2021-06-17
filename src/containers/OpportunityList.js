import { connect } from 'react-redux';
import { FaUser } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Opportunity from '../components/Opportunity';
import Loading from '../components/Loading';
import { changePage, getAllOpportunities } from '../redux/actions';

const OpportunityList = ({
  opportunities, page, changePage, getAllOpportunities,
}) => {
  const opportunitiesToDisplay = opportunities.results;
  const numberOfPages = Math.ceil(opportunities.total / 15);
  const opportunityRows = opportunitiesToDisplay ? (opportunitiesToDisplay.map((opportunity) => (
    <Opportunity
      key={`opportunity-number-${opportunity.id}`}
      opportunity={opportunity}
    />
  ))) : (<Loading />);
  const handleNextPage = () => {
    changePage(page + 15);
    getAllOpportunities(page);
  };
  const handlePreviousPage = () => {
    changePage(page - 15);
    getAllOpportunities(page);
  };
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
        <button type="button" className="previous-btn" onClick={() => handlePreviousPage()}>
          Previous page
          {' '}
          {`${page - 14} / ${numberOfPages}`}
        </button>
        <button type="button" className="next-btn" onClick={() => handleNextPage()}>
          Next page
          {' '}
          {`${page + 14} / ${numberOfPages}`}
        </button>
      </div>
    </div>
  );
};
OpportunityList.propTypes = {
  opportunities: PropTypes.arrayOf(PropTypes.object).isRequired,
  page: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
  getAllOpportunities: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  opportunities: state.opportunity.opportunities,
  page: state.page,
});

export default connect(mapStateToProps, { changePage, getAllOpportunities })(OpportunityList);
