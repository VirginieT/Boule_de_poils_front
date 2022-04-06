import './styles.scss';
import PropTypes from 'prop-types';

const AnimalPicture = ({ picture }) => (
  <img
    className="animal__picture"
    src={picture}
    alt="animal's profile"
  />
);

AnimalPicture.propTypes = {
  picture: PropTypes.string.isRequired,
};

export default AnimalPicture;
