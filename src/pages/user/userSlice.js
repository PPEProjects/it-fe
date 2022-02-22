import gql from "graphql-tag";
import { createSlice } from "@reduxjs/toolkit";
import { _slice } from "services/reduxToolkit";
import { apolloClient, restClient } from "services";

export const initialState = {
  me: { isRefresh: true },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setData: (state, { payload }) => {
      state = _slice.setData(initialState, state, payload);
    },
    setMerge: (state, { payload }) => {
      state = _slice.setMerge(initialState, state, payload);
    },
  },
});

export const { setData, setMerge } = userSlice.actions;
export const userSelector = (state) => state.user;
export default userSlice.reducer;

export function setUser(state) {
  return async (dispatch) => {
    dispatch(setData(state));
  };
}

export function setUserMerge(key, item) {
  return async (dispatch) => {
    dispatch(setMerge({ ...{}, [key]: item }));
  };
}

export function getMe() {
  return async (dispatch) => {
    dispatch(setMerge({ me: { isLoading: true } }));
    const query = gql`
      query Query {
        me {
          email
          id
          name
        }
      }
    `;
    const res = await apolloClient.query({
      query,
    });
    dispatch(setData({ me: { data: res?.data?.me }, isRefresh: true }));
  };
}
