import PropTypes from 'prop-types';

const Opportunity = ({ opportunity }) => {
  const { objective, type } = opportunity;
  return (
    <tr className="display-grid">
      <td className="display-grid td-leftmost">
        <h2 className="book-category">{ type }</h2>
        <h1 className="book-title">{objective}</h1>
        <h3 className="blue-text author">Suzanne Collins</h3>
        <div>
          <button className="blue-text option-btn" type="submit">View</button>
        </div>
      </td>
      <td className="display-grid centered-content td-middle">
        <div className="percent-circle percent-circle-64" />
        <div className="display-grid">
          <h1 className="percent-number">64%</h1>
          <h2 className="completed-text">Completed</h2>
        </div>
      </td>
      <td className="display-grid td-rightmost">
        <h2 className="current-chapter-container">Current Chapter</h2>
        <h3>Chapter 17</h3>
        <button className="primary-btn" type="button">Update Progress</button>
      </td>
    </tr>
  );
};

Opportunity.propTypes = {
  opportunity: PropTypes.shape({
    objective: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
};

export default Opportunity;
