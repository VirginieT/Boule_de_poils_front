import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAnimals } from 'src/actions/animalSearched';
import Carrousel from './Carrousel';
import './presentation.scss';
import './carrousel.scss';
import Loader from '../Loader';


const Presentation = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAnimals());
  }, []);

  const displayedProfile = useSelector((state) => state.SearchedAnimals.displayProfile);

  const animalProfile = useSelector((state) => (
    state.SearchedAnimals.animalResults[displayedProfile]
  ));

  const allAnimalProfiles = useSelector((state) => (state.SearchedAnimals.animalResults));

  const allAnimalsPictures = Object.keys(allAnimalProfiles);


    console.log(allAnimalsPictures);


    return (
  <div className="box-presentation">
    {allAnimalProfiles.length > 0 ? (
      <>
    <div className="firstbox">
      <h2 className="firstbox__title">{animalProfile.name}</h2>
      <h3 className="firstbox__subtitle">Subtitle</h3>
      <p className="firstbox__text">{animalProfile.description}</p>
    </div>
    <div className="carrousel">
      <Carrousel picture={ allAnimalProfiles } />
    </div></>
    ):<Loader/>}
  
    </div>

  );
};

export default Presentation;
