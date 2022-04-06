import './styles.scss';
import PropTypes from 'prop-types';

const AssociationContact = ({
  associationName,
  associationLocalisation,
  associationPhone,
  associationEmail,
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
      {associationLocalisation.address},
      {associationLocalisation.zip_code},
      {associationLocalisation.city}
    </p>

    <p
      className="association__phone"
    >
      {associationPhone}
    </p>
    <p
      className="association__mail"
    >
      {associationEmail}
    </p>
  </div>
);

AssociationContact.propTypes = {
  associationName: PropTypes.string.isRequired,
  associationLocalisation: PropTypes.shape({
    address: PropTypes.string.isRequired,
    zip_code: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }).isRequired,
  associationPhone: PropTypes.string,
  associationEmail: PropTypes.string.isRequired,
};

AssociationContact.defaultProps = {
  associationPhone: 'Nous n\'avons pas de numéro de téléphone',
};

export default AssociationContact;
