import gql from 'graphql-tag';
import { createSlice } from '@reduxjs/toolkit';
import { _slice } from 'services/reduxToolkit';
import { apolloClient, restClient } from 'services';

export const initialState = {
  upMemberProject: {},
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

export function upsertMemberProject(values) {
  return async dispatch => {
    dispatch(setMerge({ upMemberProject: { isLoading: true } }));
    const mutationAPI = () => {
      const mutation = gql`
        mutation Mutation($data: ProjectMembersInput!) {
          upsertProjectMembers(data: $data) {
            id
            pmUserId
            projectId
            roles
            memberUserId
            position
            linkTest
            salary
            fee
            status
            jobDescription
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
            upMemberProject: {
              project: res.data.upsertProjectMembers,
              isLoading: false,
              isOpen: false,
            },
          })
        );
      });
    } catch (e) {
      dispatch(setMerge({ upMemberProject: { isLoading: false } }));
    }
  };
}
