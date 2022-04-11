import { SAVE_DATA, NEXT_PROFILE,   PREVIOUS_PROFILE } from 'src/actions/carroussel';



const initialState = {
 
  displayProfile: 0,

  apiresults: [],
 
  name: '',

  description: '',

  picture: '',

};

const carrouselReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_DATA: {
      return {
        ...state,
        apiresults: action.datas,
      };
    }
  
    case NEXT_PROFILE: {
        const newState = { ...state };
  
        const maxIndex = newState.displayProfile + 1 >= newState.apiresults.length
         ? newState.displayProfile = 0 : newState.displayProfile + 1;
  
        newState.displayProfile = maxIndex;
        
        return newState;
      }
  
      case PREVIOUS_PROFILE: {
        const newState = { ...state };
  
        const minIndex = newState.displayProfile - 1 < 0
          ? newState.displayProfile = newState.apiresults.length - 1
          : newState.displayProfile - 1;
  
        newState.displayProfile = minIndex;
        
        return newState;
      }
    default:
      return state;
  }
};

export default carrouselReducer;
