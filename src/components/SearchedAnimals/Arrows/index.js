import Arrow from './Arrow';
import './styles.scss';

const Arrows = () => (
  <div className="nav__arrows">
    <Arrow
      identifier="left"
      clickedArrow={() => (console.log('je vais faire une action'))}
    />
    <Arrow
      identifier="right"
      clickedArrow={() => (console.log('je vais en faire une autre'))}
    />
  </div>

);

export default Arrows;
