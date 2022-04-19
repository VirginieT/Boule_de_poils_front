import './styles.scss';
import PropTypes from 'prop-types';

const AnimalPicture = ({ picture }) => (
  <img
    className="animal__picture"
    src={'http://localhost:8081/images/animaux/' + picture}
    alt="animal's profile"
  />
);

AnimalPicture.propTypes = {
  picture: PropTypes.string.isRequired,
};

export default AnimalPicture;
