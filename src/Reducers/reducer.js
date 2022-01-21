const initialState = {
  age: 21,
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (
    action.type //switch statement
  ) {
    case "ADD":
      newState.age++;
      break;

    case "SUBSTRACT":
      newState.age--;
      break;
    default:
      break;
  }
  return newState;
};

export default reducer;
