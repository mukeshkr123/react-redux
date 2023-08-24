const { createAction, nanoid, createReducer } = require("@reduxjs/toolkit");

//IntialState
const IntialState = {
  counter: 0,
};

//create Action
const increment = createAction("INCREMENT");
const decrement = createAction("DECREMENT");
const resetCounter = createAction("RESET");

// customise createAction
const incrementBy = createAction("INCREMENT_BY", (amount) => {
  return {
    payload: {
      amount,
    },
  };
});

// create Reducer
// 1. Builder callback notation
createReducer(IntialState, (builder) => {
  //increment
  builder.addCase(increment, (state) => {
    state.counter += 1;
  });
  //decrement
  builder.addCase(decrement, (state) => {
    state.counter -= 1;
  });
  // reset
  builder.addCase(resetCounter, (state) => {
    state.counter = 0;
  });
  //incrementBy
  builder.addCase(incrementBy, (state, action) => {
    state.action += action.payload.amount;
  });
});

//Store
