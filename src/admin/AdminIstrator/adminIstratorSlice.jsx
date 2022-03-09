import gql from 'graphql-tag';
import { createSlice } from '@reduxjs/toolkit';
import { _slice } from 'services/reduxToolkit';
import { apolloClient, restClient } from 'services';

export const initialState = {};

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
