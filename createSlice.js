const { createSlice, configureStore } = require("@reduxjs/toolkit");

// initial state
const initialState = {
  counter: 0,
};

// create slice
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    //increment
    increment: (state) => {
      state.counter += 1;
    },
    //decrement
    decrement: (state) => {
      state.counter -= 1;
    },
    //reser
    reset: (state, action) => {
      state.counter = 0;
    },
    //incrementBy
    incrementByAmout: (state, action) => {
      state.counter += action.payload;
    },
  },
});

// generate actions
const { increment, decrement, reset, incrementByAmout } = counterSlice.actions;

//generate reducer
const counterReducer = counterSlice.reducer;

// store
const store = configureStore({
  reducer: counterReducer,
});

// dispatch the action
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(incrementByAmout(200));
store.dispatch(reset());

console.log(store.getState());
