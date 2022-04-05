import { animalData } from 'src/data';
import Arrows from './Arrows';
import AnimalDescription from './AnimalDescription';
import AnimalPicture from './AnimalPicture';
import AssociationContact from './AssociationContact';
import ContactButton from './ContactButton';
import { useSelector } from 'react-redux';

// console.log(animalData);

const SearchedAnimals = () => {
  const animalResults = useSelector((state) => (state.SearchedAnimals.currentProfil));
  // console.log(animalResults);
  return (
    <div
      className="animal__profil"
    >
      <Arrows />
      <AnimalPicture picture={animalData.picture} />
      <AnimalDescription {...animalResults} />
      <ContactButton />
      <AssociationContact />
    </div>
  );
};

export default SearchedAnimals;
