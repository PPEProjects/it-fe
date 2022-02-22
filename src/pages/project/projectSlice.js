import gql from "graphql-tag";
import { createSlice } from "@reduxjs/toolkit";
import { _slice } from "services/reduxToolkit";
import { apolloClient, restClient } from "services";

export const initialState = {
  cProject: {},
  mlMyProject: {},
};

const projectSlice = createSlice({
  name: "project",
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

export const { setData, setMerge } = projectSlice.actions;
export const projectSelector = (state) => state.project;
export default projectSlice.reducer;

export function setProject(state) {
  return async (dispatch) => {
    dispatch(setData(state));
  };
}

export function setProjectMerge(key, item) {
  return async (dispatch) => {
    dispatch(setMerge({ ...{}, [key]: item }));
  };
}

export function MyProject() {
  return async (dispatch) => {
    dispatch(setMerge({ mlMyProject: { isLoading: true } }));
    const query = gql`
      query MyProject {
        myProject {
          id
          name
          user {
            email
            id
            name
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
          is_involved
          is_recruit
          createdAt
          updatedAt
        }
      }
    `;
    const res = await apolloClient.query({
      query,
    });
    dispatch(setData({ mlMyProject: { myProject: res.data.myProject } }));
  };
}

export function createProject(values) {
  console.log("values", values);
  return;
  return async (dispatch) => {
    dispatch(setMerge({ cProject: { isLoading: true } }));
    const mutationAPI = () => {
      const mutation = gql`
        mutation CreateProject($data: ProjectInput!) {
          createProject(data: $data) {
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
      return apolloClient.mutate({
        mutation,
        variables: values,
      });
    };

    try {
      await mutationAPI().then((res) => {
        dispatch(
          setMerge({
            cProject: {
              japaneseGoal: res.data.createProject,
              isLoading: false,
            },
          })
        );
      });
    } catch (e) {
      dispatch(setMerge({ cProject: { isLoading: false } }));
    }
  };
}
