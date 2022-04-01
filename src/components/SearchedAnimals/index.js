import AnimalDescription from './AnimalDescription';
import AnimalPicture from './AnimalPicture';
import ContactButton from './ContactButton';
import AssociationContact from './AssociationContact';

const SearchedAnimals = () => (
  <div
    className="animal__profil"
  >
    <AnimalPicture />
    <AnimalDescription />
    <ContactButton />
    <AssociationContact />
  </div>
);

export default SearchedAnimals;
