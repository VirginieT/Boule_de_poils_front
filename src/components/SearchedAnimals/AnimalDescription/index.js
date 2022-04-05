import './styles.scss';
import Proptypes from 'prop-types';

const AnimalDescription = ({
  age,
  description,
  gender,
  name,
  child_compatibility,
  garden_needed,
  status,
  other_animal_compatibility

}) => {
  let messageStatus = '';
  switch (status) {
    case 0:
      messageStatus = 'Cet animal est disponible à l\'adoption.';
      break;

    case 1:
      messageStatus = 'Cet animal est en cours de réservation.';
      break;

    case 2:
      messageStatus = 'Cet animal est déjà adopté.';
      break;

    case 3:
      messageStatus = 'Cet animal n\'est pas disponible à l\'adoption.';
      break;

    default:
      messageStatus = 'Il n\'y a pas d\'information concernant le status.';
  }

  return (
    <div
      className="animal__profil__description"
    >
      <div
        className="animal__caracteristics"
      >
        <h1>{name}</h1>
        <div className="animal__caracteristics--details">
          <span
            className="animal__details animal__details--gender"
          >
            {gender}
          </span>
          <span
            className="animal__details animal__details--age"
          >
            {age} ans
          </span>
        </div>
      </div>

      <div
        className="animal__description"
      >
        <p
          className="animal__description--descr"
        >
          {description}
        </p>
        <p
          className="animal__specificity"
        >
          Cet animal est-il sociable/ compatible avec des enfants ?
        </p>
        <span className="animal__specificity--answer">
          {/* {child_compatibility ? 'Cet animal s\' entend bien avec des 
          enfants' : 'Cet animal ne s\' entend pas bien avec des enfants'} */}
          {child_compatibility}
        </span>
        <p
          className="animal__specificity"
        >
          Cet animal est-il sociable/ compatible avec d'autres animaux ?
        </p>
        <span className="animal__specificity--answer">
          {/* {other_animal_compatibility ? 'Cet animal s\' entend bien avec 
          d\'autres animaux' : 'Cet animal ne s\' entend pas bien avec d\'autres animaux'} */}
          {other_animal_compatibility}
        </span>
        <p
          className="animal__specificity"
        >
          Cet animal a-t-il besoin d'un espace extérieur ?
        </p>
        <span className="animal__specificity--answer">
          {/* {garden_needed ? 'Cet animal aura besoin d\'un espace extérieur' : 
          'Cet animal n\'aura pas besoin d\'un espace extérieur'} */}
          {garden_needed}
        </span>

        <p
          className="animal__specificity"
        >
          Cet animal est-il disponible ?
        </p>
        <span className="animal__specificity--answer">
          {messageStatus}
        </span>

      </div>

    </div>
  );
};
AnimalDescription.propTypes = {
  age: Proptypes.number.isRequired,
  description: Proptypes.string.isRequired,
  gender: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
  child_compatibility: Proptypes.string.isRequired,
  garden_needed: Proptypes.string.isRequired,
  status: Proptypes.number.isRequired,
  other_animal_compatibility: Proptypes.string.isRequired,
};

export default AnimalDescription;
