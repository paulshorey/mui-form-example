import initialState from '../state/ui';

export default function(state=initialState, action){
    switch (action.type) {

      case "UI_NAV_TOGGLE": {
        const newState = Object.assign({},{...state});
        newState.nav.opened = !newState.nav.opened;
        
        return newState;
      }
      case "UI_NAV": {
        const newState = {};
        newState.nav = action.data;
        state = Object.assign({...state}, newState);
        return state;
       }

      case "UI_MESSAGE": {
        const newState = {};
        newState.message = action.data;

        state = Object.assign({...state}, newState);
        return state;
      }

      default: {
      }
    }
    return state;
  }
  