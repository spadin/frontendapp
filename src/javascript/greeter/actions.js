const UPDATE_NAME = 'GREETER_UPDATE_NAME';

const updateName = (name) => {
  return { type: UPDATE_NAME, name };
};

export { updateName, UPDATE_NAME };
