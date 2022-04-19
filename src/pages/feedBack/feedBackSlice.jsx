import gql from 'graphql-tag';
import { createSlice } from '@reduxjs/toolkit';
import { _slice } from 'services/reduxToolkit';
import { apolloClient } from 'services';

export const initialState = {
  upFeedBack: {},
  cFeedBack: {},
};

const feedBackSlice = createSlice({
  name: 'feedBack',
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

export const { setData, setMerge } = feedBackSlice.actions;
export const feedBackSelector = state => state.feedBack;
export default feedBackSlice.reducer;

export function setFeedBack(state) {
  return async dispatch => {
    dispatch(setData(state));
  };
}

export function setFeedBackMerge(key, item) {
  return async dispatch => {
    dispatch(setMerge({ ...{}, [key]: item }));
  };
}

export function updateFeedBack(values) {
  return async dispatch => {
    dispatch(setMerge({ upFeedBack: { isLoading: true } }));
    const mutationAPI = () => {
      const mutation = gql`
        mutation UpdateUserFeedback($data: UserFeedbackInput!) {
          updateUserFeedback(data: $data) {
            id
            userId
            projectId
            grate
            content
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
            upFeedBack: {
              updateProject: res.data.UpdateUserFeedback,
              isLoading: false,
              isOpen: false,
            },
          })
        );
      });
    } catch (e) {
      console.log(e);
      dispatch(setMerge({ upFeedBack: { isLoading: false } }));
    }
  };
}

export function createFeedBack(values) {
  return async dispatch => {
    dispatch(setMerge({ cFeedBack: { isLoading: true } }));
    const mutationAPI = () => {
      const mutation = gql`
        mutation CreateUserFeedback($data: UserFeedbackInput!) {
          createUserFeedback(data: $data) {
            id
            userId
            projectId
            grate
            content
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
            cFeedBack: {
              FeedBack: res.data.createUserFeedback,
              isLoading: false,
              isOpen: false,
            },
          })
        );
      });
    } catch (e) {
      dispatch(setMerge({ cFeedBack: { isLoading: false } }));
    }
  };
}
