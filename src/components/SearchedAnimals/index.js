import { useSelector } from 'react-redux';
import Arrows from './Arrows';
import AnimalDescription from './AnimalDescription';
import AnimalPicture from './AnimalPicture';
import AssociationContact from './AssociationContact';
import ContactButton from './ContactButton';

// console.log(animalData);

const SearchedAnimals = () => {
  const displayedProfil = useSelector((state) => state.SearchedAnimals.displayProfile);

  const animalResultsTest = useSelector((state) => (
    state.SearchedAnimals.animalResults[displayedProfil]
  ));

  const showContact = useSelector((state) => (state.SearchedAnimals.showContact));

  return (
    <div
      className="animal__profil"
    >
      <Arrows />
      <AnimalPicture picture={animalResultsTest.picture} />
      <AnimalDescription {...animalResultsTest} />
      <ContactButton
        showContactValue={showContact}
      />
      {showContact && <AssociationContact />}
    </div>
  );
};

export default SearchedAnimals;
