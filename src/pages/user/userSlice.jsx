import gql from "graphql-tag";
import { createSlice } from "@reduxjs/toolkit";
import { _slice } from "services/reduxToolkit";
import { apolloClient, restClient } from "services";

export const initialState = {
  me: { isRefresh: true },
  deUser: { isRefresh: true },
  upsertProfile: {},
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

export function upsertUserAdvance(values) {
  console.log("values", values);
  return async (dispatch) => {
    dispatch(setMerge({ upsertProfile: { isLoading: true } }));
    const mutationAPI = () => {
      const mutation = gql`
        mutation UpsertUserAdvance($data: UserAdvanceInput!) {
          upsertUserAdvance(data: $data) {
            id
            userId
            roles
            language
            skill
            info
            goal
            plan
            user {
              id
              first_name
              name
              phone_number
              address
              country
              gender
              date_of_birth
              avatar_attachment
              background_attachment
            }
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
            upsertProfile: {
              japaneseGoal: res.data.upsertUserAdvance,
              isLoading: false,
              isOpen: false,
            },
          })
        );
      });
    } catch (e) {
      dispatch(setMerge({ upsertProfile: { isLoading: false } }));
    }
  };
}
