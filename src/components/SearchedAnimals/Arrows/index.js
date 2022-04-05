import { useDispatch } from 'react-redux';
import { displayNextProfile } from 'src/actions/animalSearched';
import Arrow from './Arrow';
import './styles.scss';

const Arrows = () => {
  const dispatch = useDispatch();

  return (
    <div className="nav__arrows">
      <Arrow
        identifier="left"
        clickedArrow={() => (console.log('je vais en faire une autre'))}
      />
      <Arrow
        identifier="right"
        clickedArrow={() => (dispatch(displayNextProfile()))}
      />
    </div>
  );
};

export default Arrows;
