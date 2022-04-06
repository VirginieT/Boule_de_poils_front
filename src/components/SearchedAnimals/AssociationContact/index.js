import './styles.scss';
import PropTypes from 'prop-types';

const AssociationContact = ({
  associationName,
}) => (
  <div className="association__infos">
    <p
      className="association__name"
    >
      {associationName}
    </p>

    <p
      className="association__address"
    >
      Une addresse
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
  associationName: PropTypes.string.isRequired,
};

export default AssociationContact;
