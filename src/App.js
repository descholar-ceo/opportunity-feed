import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllPeople, getAllOpportunities } from './redux/actions';
import OpportunityList from './containers/OpportunityList';

const App = ({ getAllPeople, getAllOpportunities }) => {
  useEffect(() => {
    getAllPeople();
    getAllOpportunities();
  }, []);
  return (
    <div>
      <OpportunityList />
    </div>
  );
};

App.propTypes = {
  getAllPeople: PropTypes.func.isRequired,
  getAllOpportunities: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  people: state.person.persons,
});

export default connect(mapStateToProps, { getAllPeople, getAllOpportunities })(App);
