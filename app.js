const {
  createAction,
  createReducer,
  configureStore,
} = require("@reduxjs/toolkit");
const logger = require("redux-logger").createLogger();

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
const counterSlice = createReducer(IntialState, (builder) => {
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
    state.counter += action.payload.amount;
  });
});

// 1. map callback notation
const counterSlice2 = createAction(IntialState, {
  // increment
  [increment]: (state) => {
    state.counter += 1;
  },
  //decrement
  [decrement]: (state) => {
    state.counter -= 1;
  },
  //reset
  [resetCounter]: (state) => {
    state.counter = 0;
  },
  //incrementBy
  [incrementBy]: (state, action) => {
    state.counter += action.payload.amount;
  },
});

//Store
const store = configureStore({
  reducer: counterSlice,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

//dispatch action
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(incrementBy(100));

console.log(store.getState());
