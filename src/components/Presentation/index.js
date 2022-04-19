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
          <div className="site__identity">
            <h1 className="site__maintitle">Boule de poils</h1>
            <p>Bienvenue sur le site Boule de poils,
              ici, tu trouveras plein d'animaux qui n'attendent
              qu'un foyer aimant pour les accueillir !
              Effectue une recherche et tut auras peut-être
              la chance de tomber sur le profil de :
            </p>
          </div>

          <div className="random__carrousel">
            <Carrousel />
          </div>

          <div className="random__info">
            <div className="site__identity--medium">
              <h1 className="site__maintitle--medium">Boule de poils</h1>
              <p>Bienvenue sur le site Boule de poils,
                ici, tu trouveras plein d'animaux qui n'attendent
                qu'un foyer aimant pour les accueillir !
                Effectue une recherche et tut auras peut-être
                la chance de tomber sur le profil de :
              </p>
            </div>
            <h2 className="random__name">{animalProfile.name}</h2>
            <p className="random__description">{animalProfile.description}</p>
          </div>
        </>
      ) : <Loader />}
    </div>
  );
};

export default Presentation;
