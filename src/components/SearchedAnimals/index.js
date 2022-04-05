import { animalData } from 'src/data';
import Arrows from './Arrows';
import AnimalDescription from './AnimalDescription';
import AnimalPicture from './AnimalPicture';
import AssociationContact from './AssociationContact';
import ContactButton from './ContactButton';

console.log(animalData);

const SearchedAnimals = () => (
  <div
    className="animal__profil"
  >
    <Arrows />
    <AnimalPicture picture={animalData.picture} />
    <AnimalDescription {...animalData} />
    <ContactButton />
    <AssociationContact />
  </div>
);

export default SearchedAnimals;
