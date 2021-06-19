import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Person from '../components/Person';
import Loading from '../components/Loading';
import { changePage, getAllPeople } from '../redux/actions';

const PersonList = ({
  persons, page, changePage, getAllPeople, filter,
}) => {
  const personsToDisplay = filter === 'all' ? persons.results : persons.results.filter((pers) => {
    const regExp = new RegExp(`^${filter}`, 'gi');
    return pers.name.match(regExp);
  });
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
      <div className="list-container">
        {personRows}
      </div>
      <div className="control-btns-container">
        <button type="button" className="previous-btn" onClick={() => handlePreviousPage()}>
          {`${page > 1 ? (page - 15) : 1} - ${page === 1 ? (page + 14) : page} of ${numberOfPages}
          records`}
        </button>
        <button type="button" className="next-btn" onClick={() => handleNextPage()}>
          {`${page} - ${page + 14} of ${numberOfPages} records`}
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
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  persons: state.person.persons,
  page: state.page,
  filter: state.filter.filter,
});

export default connect(mapStateToProps, { changePage, getAllPeople })(PersonList);
