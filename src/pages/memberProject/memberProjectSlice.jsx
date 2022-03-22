import gql from 'graphql-tag';
import { createSlice } from '@reduxjs/toolkit';
import { _slice } from 'services/reduxToolkit';
import { apolloClient, restClient } from 'services';

export const initialState = {
  cMemberProject: {},
};

const memberProjectSlice = createSlice({
  name: 'memberProject',
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

export const { setData, setMerge } = memberProjectSlice.actions;
export const memberProjectSelector = state => state.memberProject;
export default memberProjectSlice.reducer;

export function setMemberProject(state) {
  return async dispatch => {
    dispatch(setData(state));
  };
}

export function setMemberProjectMerge(key, item) {
  return async dispatch => {
    dispatch(setMerge({ ...{}, [key]: item }));
  };
}

export function createMemberProject(values) {
  return async dispatch => {
    dispatch(setMerge({ cMemberProject: { isLoading: true } }));
    const mutationAPI = () => {
      const mutation = gql`
        mutation CreateProjectMembers($data: ProjectMembersInput!) {
          createProjectMembers(data: $data) {
            id
            pmUserId
            projectId
            project {
              id
              name
            }
            memberUserId
            position
            linkTest
            salary
            fee
            status
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
      await mutationAPI().then(res => {
        dispatch(
          setMerge({
            cMemberProject: {
              project: res.data.createProjectMembers,
              isLoading: false,
              isOpen: false,
            },
          })
        );
      });
    } catch (e) {
      dispatch(setMerge({ cMemberProject: { isLoading: false } }));
    }
  };
}
