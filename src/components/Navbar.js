import { FaUser } from 'react-icons/fa';

const Navbar = () => (
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
);

export default Navbar;
