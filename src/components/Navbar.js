// import { FaUser } from 'react-icons/fa';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { changeTab } from '../redux/actions';

const Navbar = ({ changeTab, currentTab }) => (
  <div className="header">
    <div className="nav display-grid">
      <div className="nav-left">
        <h1 className="primary-text">Opportunity Feed</h1>
        <div className="display-grid centered-content">
          <div className="nav-link-container">
            <Link className={`link-btn ${currentTab === 'opportunity' ? 'active' : ''}`} onClick={() => changeTab('opportunity')} to="/">Opportunities</Link>
            <Link className={`link-btn ${currentTab === 'people' ? 'active' : ''}`} onClick={() => changeTab('people')} to="/people">People</Link>
          </div>
        </div>
      </div>
      {/* <div className="display-grid centered-content nav-user-container">
        <FaUser className="blue-text" />
      </div> */}
    </div>
  </div>
);

Navbar.propTypes = {
  changeTab: PropTypes.func.isRequired,
  currentTab: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  currentTab: state.tab,
});

export default connect(mapStateToProps, { changeTab })(Navbar);
