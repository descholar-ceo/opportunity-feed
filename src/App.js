import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { getAllPeople, getAllOpportunities } from './redux/actions';
import Routes from './components/Routes';
import Navbar from './components/Navbar';

const App = ({ getAllPeople, getAllOpportunities, page }) => {
  useEffect(() => {
    getAllPeople(page);
    getAllOpportunities(page);
  }, []);
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
};

App.propTypes = {
  getAllPeople: PropTypes.func.isRequired,
  getAllOpportunities: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({ page: state.page });

export default connect(mapStateToProps, { getAllPeople, getAllOpportunities })(App);
