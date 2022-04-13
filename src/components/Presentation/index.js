import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Carrousel from './Carrousel';
import './presentation.scss';
import './carrousel.scss';
import Loader from '../Loader';
import { connexionCarrousselApi } from '../../actions/carroussel';

const Presentation = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(connexionCarrousselApi());
  }, []);

  const displayedProfile = useSelector((state) => state.Carroussel.displayProfile);

  const animalProfile = useSelector((state) => (
    state.Carroussel.apiresults[displayedProfile]
  ));

  const allAnimalProfiles = useSelector((state) => (state.Carroussel.apiresults));

  return (
    <div className="box-presentation">
      {allAnimalProfiles.length > 0 ? (
        <>
          <div className="firstbox">
            <h2 className="firstbox__title">{animalProfile.name}</h2>
          
            <p className="firstbox__text">{animalProfile.description}</p>
          </div>
          
          <div className="carrousel">
            <Carrousel />
          </div>
        </>
      ) : <Loader />}
    </div>
  );
};

export default Presentation;
