import { UPDATE_NAME } from './actions';

const defaultState = {
  name: ''
};

const greeter = (state = defaultState, action) => {
  switch(action.type) {
    case UPDATE_NAME:
      return {
        ...state,
        name: action.name
      };
    default:
      return state;
  }
};

export default greeter;
