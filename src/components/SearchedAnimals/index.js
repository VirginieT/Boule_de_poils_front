import { animalData } from 'src/data';
import AnimalDescription from './AnimalDescription';
import AnimalPicture from './AnimalPicture';
import ContactButton from './ContactButton';
import AssociationContact from './AssociationContact';

console.log(animalData);

const SearchedAnimals = () => (
  <div
    className="animal__profil"
  >
    <AnimalPicture picture={animalData.picture} />
    <AnimalDescription {...animalData} />
    <ContactButton />
    <AssociationContact />
  </div>
);

export default SearchedAnimals;
