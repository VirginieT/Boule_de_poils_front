import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAnimals } from 'src/actions/animalSearched';
import Loader from '../Loader';
import Arrows from './Arrows';
import AnimalDescription from './AnimalDescription';
import AnimalPicture from './AnimalPicture';
import AssociationContact from './AssociationContact';
import ContactButton from './ContactButton';

const SearchedAnimals = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAnimals());
  }, []);

  const speciesValue = useSelector((state) => state.SearchedAnimals.species);
  const genderValue = useSelector((state) => state.SearchedAnimals.gender);
  const ageValue = useSelector((state) => state.SearchedAnimals.age);
  const childValue = useSelector((state) => state.SearchedAnimals.childCompatibility);
  const othersValue = useSelector((state) => state.SearchedAnimals.otherAnimalCompatibility);
  const gardenValue = useSelector((state) => state.SearchedAnimals.gardenNeeded);
  const locValue = useSelector((state) => state.SearchedAnimals.department);


  const displayedProfile = useSelector((state) => state.SearchedAnimals.displayProfile);

  const animalProfile = useSelector((state) => (
    state.SearchedAnimals.animalResults[displayedProfile]
  ));

  const allAnimalProfiles = useSelector((state) => (state.SearchedAnimals.animalResults));
    console.log(allAnimalProfiles);
  const showContact = useSelector((state) => (state.SearchedAnimals.showContact));

  console.log({
    speciesValue,
    genderValue,
    ageValue,
    childValue,
    othersValue,
    gardenValue,
    locValue,
  });

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
                {...animalProfile.association}
              />
            )}
        </>
      )
        : <Loader />}
    </div>
  );
};

export default SearchedAnimals;
