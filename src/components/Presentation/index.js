import Carrousel from './Carrousel';
import { SliderData } from './SliderData';
import './presentation.scss';
import './carrousel.scss';

const Presentation = () => (

  <div className="box-presentation">
    <div className="firstbox">
      <h2 className="firstbox__title">Title</h2>
      <h3 className="firstbox__subtitle">Subtitle</h3>
      <p className="firstbox__text">Vivamus euismod lectus in feugiat tempor. Nunc pulvinar ante sed iaculis pulvinar. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer id laoreet urna. Nulla porta tristique lectus facilisis congue. Cras ut pharetra libero. Proin sed ullamcorper orci, eu tristique augue. Curabitur aliquet aliquet sollicitudin. Donec varius molestie magna, eu posuere massa porttitor et.</p>
    </div>
    <div className="carrousel">
      <Carrousel slides={SliderData}/>
    </div>
  </div>

);

export default Presentation;
