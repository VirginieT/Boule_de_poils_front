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
    <div className="random">
      {allAnimalProfiles.length > 0 ? (
        <>
          <div className="random__info">
            <h2 className="random__name">{animalProfile.name}</h2>
            <p className="random__description">{animalProfile.description}</p>
          </div>
          <div className="random__carrousel">
            <Carrousel />
          </div>
        </>
      ) : <Loader />}
    </div>
  );
};

export default Presentation;
