import gql from "graphql-tag";
import { createSlice } from "@reduxjs/toolkit";
import { _slice } from "services/reduxToolkit";
import { apolloClient, restClient } from "services";

export const initialState = {
  mlMyProject: {},
  mlMyIdeas: {},
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

export function MyProject(type = "project") {
  return async (dispatch) => {
    dispatch(setMerge({ mlMyProject: { isLoading: true } }));
    const query = gql`
      query SearchProject($name: String, $type: String, $status: String) {
        searchProject(name: $name, type: $type, status: $status) {
          id
          name
          user {
            email
            id
            name
          }
          members {
            id
            position
            memberUserId
            memberUser {
              id
              name
            }
          }
          attachments
          authorUserId
          category
          description
          level
          privacy
          version
          budget
          type
          salary
          status
          memberJoin
          is_recruit
          is_involved
          createdAt
          updatedAt
        }
      }
    `;
    const res = await apolloClient.query({
      query,
      variables: {
        type,
      },
    });
    dispatch(setData({ mlMyProject: { myProject: res.data.searchProject } }));
  };
}

export function MyIdeas(type = "ideas") {
  return async (dispatch) => {
    dispatch(setMerge({ mlMyIdeas: { isLoading: true } }));
    const query = gql`
      query SearchProject($name: String, $type: String, $status: String) {
        searchProject(name: $name, type: $type, status: $status) {
          id
          name
          user {
            email
            id
            name
          }
          members {
            id
            position
            memberUserId
            memberUser {
              id
              name
            }
          }
          attachments
          authorUserId
          category
          description
          level
          privacy
          version
          budget
          type
          salary
          status
          memberJoin
          is_recruit
          is_involved
          createdAt
          updatedAt
        }
      }
    `;
    const res = await apolloClient.query({
      query,
      variables: {
        type,
      },
    });
    dispatch(setData({ mlMyIdeas: { myIdeas: res.data.searchProject } }));
  };
}
