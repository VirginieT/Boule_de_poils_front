import './styles.scss';
import arrow from 'src/assets/images/bx-chevron-left.svg';

const Arrow = () => (

  <button
    type="button"
    className="button__arrow"
  >
    <img
      src={arrow}
      alt=""
    />
  </button>

);
export default Arrow;
