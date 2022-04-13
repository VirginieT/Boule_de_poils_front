import axios from 'axios';

import { CONNEXION_CARROUSSEL_API, saveData } from '../actions/carroussel';

const carrousselMiddleware = (store) => (next) => (action) => {
    switch(action.type){
      case CONNEXION_CARROUSSEL_API:
        axios.get('http://localhost:8081/api/animal/caroussel', {})
        
        .then((response) => {
          // console.log(response.data);
          store.dispatch(saveData(response.data));
        })

        .catch((error) => {
          // handle error
          console.log(error);
        });
         break;
        default:
      }

      next(action);

};

export default carrousselMiddleware;

