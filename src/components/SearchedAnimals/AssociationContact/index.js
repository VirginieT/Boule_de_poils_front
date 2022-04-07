import './styles.scss';
import PropTypes from 'prop-types';

const AssociationContact = ({
  name,
  street,
}) => (
  <div className="association__infos">
    <p
      className="association__name"
    >
      {name}
    </p>

    <p
      className="association__address"
    >
      {street}
    </p>

    <p
      className="association__phone"
    >
      Un téléphone
    </p>
    <p
      className="association__mail"
    >
      un mail
    </p>
  </div>
);

AssociationContact.propTypes = {
  name: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
};

export default AssociationContact;
