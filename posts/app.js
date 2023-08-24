const {
  createAsyncThunk,
  createSlice,
  configureStore,
} = require("@reduxjs/toolkit");
const { default: axios } = require("axios");

const baseURL = "https://jsonplaceholder.typicode.com/posts";

// Initial State
const initialState = {
  posts: [],
  loading: false,
  error: null,
};

// action AsyncThunk
const fetchPostAction = createAsyncThunk("posts/fetch", async () => {
  const res = await axios.get(baseURL);
  return res.data; // grabing the data only
});

// slice
const postSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    //Handle lifecycle - pending-success , rejected
    // pending
    builder.addCase(fetchPostAction.pending, (state) => {
      state.loading = true;
    });
    // fullfilled
    builder.addCase(fetchPostAction.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.loading = false;
    });
    // rejected
    builder.addCase(fetchPostAction.rejected, (state) => {
      state.posts = [];
      state.loading = false;
      state.error = action.payload;
    });
  },
});

// generate reducer
const postsReducer = postSlice.reducer;

// store
const store = configureStore({
  reducer: postsReducer,
});

// dispatch the action
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchPostAction());
