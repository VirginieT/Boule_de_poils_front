import './styles.scss';
import Proptypes from 'prop-types';

const AnimalPicture = ({ picture }) => (
  <img
    className="animal__picture"
    src={picture}
    alt="animal's profile"
  />
);

AnimalPicture.propTypes = {
  picture: Proptypes.string.isRequired,
};

export default AnimalPicture;
