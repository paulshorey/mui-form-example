import initialState from '../state/anyapi';

export default function(state=initialState, action){
    switch (action.type) {

       case "ANYAPI_LOGIN": {
            return {}
        }

        case "ANYAPI_GET":
        case "ANYAPI_GET_RECEIVED": {

          if (action.data) {
            const newState = {};
            newState[action.payload.prop] = action.data;
            state = Object.assign({...state}, newState);
          }
          return state;

        }
           case "ANYAPI_GET_ERROR": {
                return {}
            }

       case "ANYAPI_POST": {
            return {}
        }

       default: {
        }
    }
    return state;
  }
  