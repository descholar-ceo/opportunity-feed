import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllPeople } from './redux/actions';

const App = ({ getAllPeople }) => {
  useEffect(() => getAllPeople(), []);
  return (
    <div>
      <h1>Hello react</h1>
    </div>
  );
};

App.propTypes = {
  getAllPeople: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  people: state.person.persons,
});

export default connect(mapStateToProps, { getAllPeople })(App);
