import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Opportunity from '../components/Opportunity';
import Loading from '../components/Loading';
import { changePage, getAllOpportunities } from '../redux/actions';

const OpportunityList = ({
  opportunities, page, changePage, getAllOpportunities, filter,
}) => {
  const opportunitiesToDisplay = filter === 'all' ? opportunities.results : opportunities.results.filter((opport) => {
    const regExp = new RegExp(`^${filter}`, 'gi');
    return opport.objective.match(regExp);
  });
  const numberOfPages = opportunities.total;
  const opportunityRows = opportunitiesToDisplay ? (opportunitiesToDisplay.map((opportunity) => (
    <Opportunity
      key={`opportunity-number-${opportunity.id}`}
      opportunity={opportunity}
    />
  ))) : (<Loading />);
  const handleNextPage = () => {
    if (page + 15 <= opportunities.total) {
      changePage(page + 15);
      getAllOpportunities(page);
    }
  };
  const handlePreviousPage = () => {
    if (page - 15 > 0) {
      changePage(page - 15);
      getAllOpportunities(page);
    }
  };
  return (
    <div>
      <div className="list-container">
        {opportunityRows}
      </div>
      <div className="control-btns-container">
        <button type="button" className="previous-btn" onClick={() => handlePreviousPage()}>
          Previous page
          {' '}
          {`${page} / ${numberOfPages}`}
        </button>
        <button type="button" className="next-btn" onClick={() => handleNextPage()}>
          Next page
          {' '}
          {`${page + 15} / ${numberOfPages}`}
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
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  opportunities: state.opportunity.opportunities,
  page: state.page,
  filter: state.filter.filter,
});

export default connect(mapStateToProps, { changePage, getAllOpportunities })(OpportunityList);
