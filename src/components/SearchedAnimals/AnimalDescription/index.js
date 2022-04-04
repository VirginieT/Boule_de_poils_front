import './styles.scss';

const AnimalDescription = () => (
  <div
    className="animal__profil__description"
  >
    <div
      className="animal__caracteristics"
    >
      <h1>Nom</h1>
      <div className="animal__caracteristics--details">
        <span
          className="animal__details animal__details--gender"
        >
          Femelle
        </span>
        <span
          className="animal__details animal__details--age"
        >
          3 ans
        </span>
      </div>
    </div>

    <div
      className="animal__description"
    >
      <p
        className="animal__description--descr"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Iusto, adipisci distinctio facere harum est ipsum maxime sint
        dolorem quis voluptate quaerat mi
        nima consequatur laboriosam dolorum ducimus neque, eius dolo
        r. Ducimus ex corrupti nulla rem sed! Hic impedit natus quia dolores?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Iusto, adipisci distinctio facere harum est ipsum maxime sint
        dolorem quis voluptate quaerat mi
        nima consequatur laboriosam dolorum ducimus neque, eius dolo
        r. Ducimus ex corrupti nulla rem sed! Hic impedit natus quia dolores?
      </p>
    </div>

  </div>
);

export default AnimalDescription;
