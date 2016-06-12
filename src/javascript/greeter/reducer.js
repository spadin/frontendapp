import { UPDATE_NAME } from './actions';

const greeter = (state = { name: '' }, action) => {
  switch (action.type) {
    case UPDATE_NAME:
      return {
        ...state,
        name: action.name,
      };
    default:
      return state;
  }
};

export default greeter;
