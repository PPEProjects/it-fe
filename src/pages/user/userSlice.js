import gql from "graphql-tag";
import { createSlice } from "@reduxjs/toolkit";
import { _slice } from "services/reduxToolkit";
import { apolloClient, restClient } from "services";

export const initialState = {
  me: { isRefresh: true },
  deUser: { isRefresh: true },
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
      query Me {
        me {
          id
          name
          email
          phone_number
          avatar_attachment
          userAdvance {
            goal
            plan
            language
            roles
          }
          userFeedback {
            grate
          }
          project {
            id
            name
            type
          }
          projectMembers {
            id
            project {
              name
            }
            position
          }
        }
      }
    `;
    const res = await apolloClient.query({
      query,
    });
    dispatch(setData({ me: { data: res?.data?.me }, isRefresh: true }));
  };
}

export function detailUser(id) {
  return async (dispatch) => {
    dispatch(setMerge({ deUser: { isRefresh: false, isLoading: true } }));
    const query = gql`
      query DetailUser($detailUserId: ID) {
        detailUser(id: $detailUserId) {
          id
          first_name
          name
          email
          phone_number
          address
          date_of_birth
          gender
          userAdvance {
            id
            userId
            roles
            language
            skill
            info
            plan
            goal
            numberFramework
            selfProject {
              id
              name
              description
              attachments
            }
            joinProject {
              id
              position
              project {
                id
                name
                category
                attachments
                timeToDo
              }
            }
          }
        }
      }
    `;
    const res = await apolloClient.query({
      query,
      variables: {
        detailUserId: id,
      },
    });
    const detailUserIds = res?.data?.detailUser;
    dispatch(
      setData({
        deUser: {
          detailUserIds,
          isLoading: false,
          isRefresh: false,
        },
      })
    );
  };
}
