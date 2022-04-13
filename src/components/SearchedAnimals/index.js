import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAnimals } from 'src/actions/animalSearched';
import Loader from '../Loader';
import Arrows from './Arrows';
import AnimalDescription from './AnimalDescription';
import AnimalPicture from './AnimalPicture';
import AssociationContact from './AssociationContact';
import ContactButton from './ContactButton';
import NoResultAlert from './NoResultsAlert/noResultsAlert';

const SearchedAnimals = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAnimals());
  }, []);

  const displayedProfile = useSelector((state) => state.SearchedAnimals.displayProfile);

  const animalProfile = useSelector((state) => (
    state.SearchedAnimals.animalResults[displayedProfile]
  ));

  const allAnimalProfiles = useSelector((state) => (state.SearchedAnimals.animalResults));

  const showContact = useSelector((state) => (state.SearchedAnimals.showContact));

  if (Array.isArray(allAnimalProfiles) && allAnimalProfiles.length > 0) {
    return (
      <div className="animal__profil">
        <Arrows />
        <AnimalPicture picture={animalProfile.picture} />
        <AnimalDescription {...animalProfile} />
        <ContactButton showContactValue={showContact} />
        {showContact && (<AssociationContact {...animalProfile.association} />)}
      </div>
    );
  }
  else if (allAnimalProfiles === 'void') {
    return (
        <div className="animal__profil">
          <NoResultAlert />
        </div>
      );
    }
    else if (allAnimalProfiles === 'error') {
      return (
        <div className="animal__profil">
          <Error />
        </div>
      );
    }
    else {
      return (
        <div className="animal__profil">
          <Loader />
        </div>
      );
    }
};

export default SearchedAnimals;
