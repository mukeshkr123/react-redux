const { createAction } = require("@reduxjs/toolkit");

//IntialState
const IntialState = {
  counter: 0,
};

//Action creator - Action
const increment = createAction("INCREMENT");
const decrement = createAction("DECREMENT");
const resetCounter = createAction("RESET");
const incrementBy = createAction("INCREMENT_BY");

console.log(increment(20));

//Reducer
//Store
