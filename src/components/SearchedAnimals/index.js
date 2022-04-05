import { useSelector } from 'react-redux';
import Arrows from './Arrows';
import AnimalDescription from './AnimalDescription';
import AnimalPicture from './AnimalPicture';
import AssociationContact from './AssociationContact';
import ContactButton from './ContactButton';

// console.log(animalData);

const SearchedAnimals = () => {
  const animalResults = useSelector((state) => (state.SearchedAnimals.currentProfil));
  return (
    <div
      className="animal__profil"
    >
      <Arrows />
      <AnimalPicture picture={animalResults.picture} />
      <AnimalDescription {...animalResults} />
      <ContactButton />
      <AssociationContact />
    </div>
  );
};

export default SearchedAnimals;
