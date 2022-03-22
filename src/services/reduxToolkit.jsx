import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import authsReducer from 'pages/auth/authsSlice';
import allPagesReducer from 'pages/home/AllPage/allPageSlice';
import projectSliceReducer from 'pages/project/projectSlice';
import userSliceReducer from 'pages/user/userSlice';
import adminIstratorSliceReducer from 'admin/AdminIstrator/adminIstratorSlice';
import memberProjectSliceReducer from 'pages/memberProject/memberProjectSlice';

const reducer = combineReducers({
  auths: authsReducer,
  allPages: allPagesReducer,
  project: projectSliceReducer,
  user: userSliceReducer,
  adminIstrator: adminIstratorSliceReducer,
  memberProject: memberProjectSliceReducer,
});

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({ serializableCheck: false });
  },
});

/**
 * _slice
 */
export class _slice {
  static setData(initialState, state, payload) {
    Object.entries(initialState).map(([key, value], i) => {
      if (typeof payload[key] !== 'undefined') {
        state[key] = payload[key];
      }
    });
    return state;
  }

  static setMerge(initialState, state, payload) {
    Object.entries(initialState).map(([key, value], i) => {
      if (typeof payload[key] !== 'undefined') {
        state[key] = { ...state[key], ...payload[key] };
      }
    });
    return state;
  }
}
