export const todoReducer = (initialState, action) => {
  switch (action.type) {
    case "Add Todo":
      return [...initialState, action.payload];
    case "Delete Todo":
      return initialState.filter((todos) => todos.id !== action.payload);
    default:
      return initialState;
  }
};
