import { connect } from 'react-redux';
import { FaUser } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Person from '../components/Person';
import Loading from '../components/Loading';
import { changePage, getAllPeople } from '../redux/actions';

const PersonList = ({
  persons, page, changePage, getAllPeople,
}) => {
  const personsToDisplay = persons.results;
  const numberOfPages = persons.total;
  const personRows = personsToDisplay ? (personsToDisplay.map((person) => (
    <Person
      key={`person-number-${person.id}`}
      person={person}
    />
  ))) : (<Loading />);
  const handleNextPage = () => {
    if (page + 15 <= persons.total) {
      changePage(page + 15);
      getAllPeople(page);
    }
  };
  const handlePreviousPage = () => {
    if (page - 15 > 0) {
      changePage(page - 15);
      getAllPeople(page);
    }
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
        {personRows}
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
PersonList.propTypes = {
  persons: PropTypes.arrayOf(PropTypes.object).isRequired,
  page: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
  getAllPeople: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  persons: state.person.persons,
  page: state.page,
});

export default connect(mapStateToProps, { changePage, getAllPeople })(PersonList);
