import './styles.scss';

const AnimalDescription = ({
  age,
  description,
  gender,
  name,
  child_compatibility,
  garden_needed,
  status,
  other_animal_compatibility

}) => (
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
        {child_compatibility ? 'Cet animal s\' entend bien avec des enfants' : 'Cet animal ne s\' entend pas bien avec des enfants'}
      </span>
      <p
        className="animal__specificity"
      >
        Cet animal est-il sociable/ compatible avec d'autres animaux ?
      </p>
      <span className="animal__specificity--answer">
        {other_animal_compatibility ? 'Cet animal s\' entend bien avec d\'autres animaux' : 'Cet animal ne s\' entend pas bien avec d\'autres animaux'}
      </span>
      <p
        className="animal__specificity"
      >
        Cet animal a-t-il besoin d'un espace extérieur ?
      </p>
      <span className="animal__specificity--answer">
        {garden_needed ? 'Cet animal aura besoin d\'un espace extérieur' : 'Cet animal n\'aura pas besoin d\'un espace extérieur'}
      </span>

      <p
        className="animal__specificity"
      >
        Cet animal est-il disponible ?
      </p>
      <span className="animal__specificity--answer">
        Cet animal est {status}
      </span>

    </div>

  </div>
);

export default AnimalDescription;
