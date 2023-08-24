const { createAction, nanoid } = require("@reduxjs/toolkit");

//IntialState
const IntialState = {
  counter: 0,
};

//Action creator - Action
const increment = createAction("INCREMENT");
const decrement = createAction("DECREMENT");
const resetCounter = createAction("RESET");

// customise createAction
const incrementBy = createAction("INCREMENT_BY", (amount, user) => {
  return {
    payload: {
      amount,
      user,
      id: nanoid(),
    },
  };
});

console.log(incrementBy(20, "emma"));
//Reducer
//Store
