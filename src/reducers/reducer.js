import { PUT_DATA } from '../actions/actions';

const initialState = {
  data: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case PUT_DATA:
      return {
        ...state,
        data: action.payload
      }
      default: 
        return state;
    }
    
};

export default reducer;