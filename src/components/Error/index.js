import './error.scss';

import errorpicture from 'src/assets/img/dogpicture.png';

const error = () => (
  
  <div className="errorbox">
  
  <h2 className="titrerror"> 404</h2>

  <p className='paragrapherror'>Waouf,il y a un os, la page que vous avez demandé est introuvable.</p>
    <img className="errorpicture" src={errorpicture} alt="imgerror"/>

  </div>


);

export default error;
