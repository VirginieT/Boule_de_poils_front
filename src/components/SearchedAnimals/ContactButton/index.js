import './styles.scss';
import { displayContact } from 'src/actions/animalSearched';
import Proptypes from 'prop-types';
import { useDispatch } from 'react-redux';

const ContactButton = ({ showContactValue }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="contact"
    >
      <button
        className="contact__button--display"
        type="button"
        onClick={() => {
          const showContactBool = !showContactValue;
          dispatch(displayContact(showContactBool));
        }}
      >
        Afficher les coordonnées
      </button>
    </div>
  );
};

ContactButton.propTypes = {
  showContactValue: Proptypes.bool.isRequired,
};

export default ContactButton;
