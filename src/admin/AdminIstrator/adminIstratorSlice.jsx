import gql from 'graphql-tag';
import { createSlice } from '@reduxjs/toolkit';
import { _slice } from 'services/reduxToolkit';
import { apolloClient, restClient } from 'services';

export const initialState = {
  aPosition: {},
};

const adminIstratorSlice = createSlice({
  name: 'adminIstrator',
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

export const { setData, setMerge } = adminIstratorSlice.actions;
export const adminIstratorSelector = state => state.adminIstrator;
export default adminIstratorSlice.reducer;

export function setAdminIstrator(state) {
  return async dispatch => {
    dispatch(setData(state));
  };
}

export function setAdminIstratorMerge(key, item) {
  return async dispatch => {
    dispatch(setMerge({ ...{}, [key]: item }));
  };
}

export function addAsPosition(values) {
  return async dispatch => {
    dispatch(setMerge({ aPosition: { isLoading: true } }));
    const mutationAPI = () => {
      const mutation = gql`
        mutation AddAsPosition($userId: ID, $roles: String) {
          addAsPosition(userId: $userId, roles: $roles) {
            id
            roles
            language
            skill
            userId
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
            aPosition: {
              addPositon: res.data.AddAsPosition,
              isLoading: false,
            },
          })
        );
      });
    } catch (e) {
      dispatch(setMerge({ aPosition: { isLoading: false } }));
    }
  };
}
