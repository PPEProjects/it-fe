import gql from "graphql-tag";
import { createSlice } from "@reduxjs/toolkit";
import { _slice } from "services/reduxToolkit";
import { apolloClient, restClient } from "services";

export const initialState = {
  mlMyProject: {},
};

const allPagesSlice = createSlice({
  name: "allPages",
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

export const { setData, setMerge } = allPagesSlice.actions;
export const allPagesSelector = (state) => state.allPages;
export default allPagesSlice.reducer;

export function setAllPage(state) {
  return async (dispatch) => {
    dispatch(setData(state));
  };
}

export function setAllPageMerge(key, item) {
  return async (dispatch) => {
    dispatch(setMerge({ ...{}, [key]: item }));
  };
}

export function MyProject() {
  return async (dispatch) => {
    dispatch(setMerge({ mlMyProject: { isLoading: true } }));
    const query = gql`
      query Query {
        allProject {
          id
          name
          user {
            email
            id
            name
          }
          attachments
          category
          description
          level
          privacy
          version
          budget
          type
          salary
          is_recruit
          is_involved
          createdAt
          updatedAt
        }
      }
    `;
    const res = await apolloClient.query({
      query,
    });
    dispatch(setData({ mlMyProject: { myProject: res.data.allProject } }));
  };
}
