import { useSelector } from 'react-redux';
import Arrows from './Arrows';
import AnimalDescription from './AnimalDescription';
import AnimalPicture from './AnimalPicture';
import AssociationContact from './AssociationContact';
import ContactButton from './ContactButton';

// console.log(animalData);

const SearchedAnimals = () => {
  const animalResultsTest = useSelector((state) => (
    state.SearchedAnimals.animalResults[0]
  ));

  // const animalResults = useSelector((state) => (state.SearchedAnimals.currentProfil));
  return (
    <div
      className="animal__profil"
    >
      <Arrows />
      <AnimalPicture picture={animalResultsTest.picture} />
      <AnimalDescription {...animalResultsTest} />
      <ContactButton />
      <AssociationContact />
    </div>
  );
};

export default SearchedAnimals;
