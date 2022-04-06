import { useSelector } from 'react-redux';
import Loader from '../Loader';
import Arrows from './Arrows';
import AnimalDescription from './AnimalDescription';
import AnimalPicture from './AnimalPicture';
import AssociationContact from './AssociationContact';
import ContactButton from './ContactButton';

const SearchedAnimals = () => {
  const displayedProfile = useSelector((state) => state.SearchedAnimals.displayProfile);

  const animalProfile = useSelector((state) => (
    state.SearchedAnimals.animalResults[displayedProfile]
  ));

  const allAnimalProfiles = useSelector((state) => (state.SearchedAnimals.animalResults));

  const showContact = useSelector((state) => (state.SearchedAnimals.showContact));

  return (
    <div
      className="animal__profil"
    >
      {allAnimalProfiles.length > 0 ? (
        <>
          <Arrows />
          <AnimalPicture picture={animalProfile.picture} />
          <AnimalDescription {...animalProfile} />
          <ContactButton
            showContactValue={showContact}
          />
          {showContact
            && (
              <AssociationContact
                {...animalProfile}
              />
            )}
        </>
      )
        : <Loader />}
    </div>
  );
};

export default SearchedAnimals;
