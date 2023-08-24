const { createAsyncThunk } = require("@reduxjs/toolkit");
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
  const data = await axios.get(baseURL);
  return data;
});

// slice
