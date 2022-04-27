import gql from 'graphql-tag';
import { createSlice } from '@reduxjs/toolkit';
import { _slice } from 'services/reduxToolkit';
import { apolloClient, restClient } from 'services';

export const initialState = {
  me: { isRefresh: true },
  deUser: { isRefresh: true },
  mlMyProject: {},
  mlMyIdeas: {},
  upsertProfile: {},
  upProject: {},
  dataProject: {},
  dProject: {},
  mlUser: {},
  isOpenMyProfileRight: false,
  mlPJoinProject: {},
};

const userSlice = createSlice({
  name: 'user',
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
export const userSelector = state => state.user;
export default userSlice.reducer;

export function setUser(state) {
  return async dispatch => {
    dispatch(setData(state));
  };
}

export function setUserMerge(key, item) {
  return async dispatch => {
    dispatch(setMerge({ ...{}, [key]: item }));
  };
}

export function getMe() {
  return async dispatch => {
    dispatch(setMerge({ me: { isLoading: true } }));
    const query = gql`
      query Me {
        me {
          id
          name
          email
          first_name
          phone_number
          gender
          allPosition
          date_of_birth
          avatar_attachment
          background_attachment
          userAdvance {
            goal
            plan
            language
            roles
          }
          userFeedback {
            grate
          }
          selfProject {
            id
            name
            type
          }
          joinProject {
            id
            project {
              name
            }
            position
          }
          numberSelfProject
          numberJoinedProject
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
  return async dispatch => {
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
          avatar_attachment
          background_attachment
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
          userAdvance {
            id
            userId
            roles
            language
            skill
            info
            plan
            goal
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
  return async dispatch => {
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
      await mutationAPI().then(res => {
        dispatch(
          setMerge({
            upsertProfile: {
              upsertUserAdvance: res.data.upsertUserAdvance,
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

export function myProject(type = 'project') {
  return async dispatch => {
    dispatch(setMerge({ mlMyProject: { isLoading: true } }));
    const query = gql`
      query MyProject($type: String) {
        myProject(type: $type) {
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
          framework
          programingLanguage
          privacy
          version
          status
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
      variables: {
        type,
      },
    });
    dispatch(setData({ mlMyProject: { myProject: res.data.myProject } }));
  };
}

export function myIdeas(type = 'ideas') {
  return async dispatch => {
    dispatch(setMerge({ mlMyIdeas: { isLoading: true } }));
    const query = gql`
      query MyProject($type: String) {
        myProject(type: $type) {
          id
          name
          user {
            email
            id
            name
          }
          status
          attachments
          authorUserId
          category
          description
          level
          framework
          programingLanguage
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
      variables: {
        type,
      },
    });
    dispatch(setData({ mlMyIdeas: { myIdeas: res.data.myProject } }));
  };
}

export function updateProject(values) {
  return async dispatch => {
    dispatch(setMerge({ upProject: { isLoading: true } }));
    const mutationAPI = () => {
      const mutation = gql`
        mutation UpdateProject($data: ProjectInput!) {
          updateProject(data: $data) {
            id
            name
            attachments
            authorUserId
            category
            description
            framework
            programingLanguage
            level
            companies
            privacy
            version
            budget
            type
            salary
            status
            contentStatus
            memberJoin
            is_involved
            is_recruit
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
            upProject: {
              updateProject: res.data.updateProject,
              isLoading: false,
              isOpen: false,
            },
          })
        );
      });
    } catch (e) {
      dispatch(setMerge({ upProject: { isLoading: false } }));
    }
  };
}

export function deleteProject(id) {
  return async dispatch => {
    dispatch(setMerge({ dProject: { isLoading: true } }));
    const mutationAPI = () => {
      const mutation = gql`
        mutation DeleteProject($deleteProjectId: ID) {
          deleteProject(id: $deleteProjectId)
        }
      `;
      return apolloClient.mutate({
        mutation,
        variables: {
          deleteProjectId: id,
        },
      });
    };

    try {
      await mutationAPI().then(res => {
        dispatch(
          setMerge({
            deleProject: {
              dProject: res.data.DeleteProject,
              isLoading: false,
            },
          })
        );
      });
    } catch (e) {
      dispatch(setMerge({ dProject: { isLoading: false } }));
    }
  };
}

export function myListUser() {
  return async dispatch => {
    dispatch(setMerge({ mlUser: { isLoading: true } }));
    const query = gql`
      query SearchUsers($name: String, $roles: JSON) {
        searchUsers(name: $name, roles: $roles) {
          id
          name
          email
          userFeedback {
            id
            grate
          }
          avgUserFeedback
          phone_number
          avatar_attachment
          userAdvance {
            id
            roles
            goal
            plan
            userId
          }
        }
      }
    `;
    const res = await apolloClient.query({
      query,
    });
    dispatch(setData({ mlUser: { myListUser: res.data.searchUsers } }));
  };
}

export function listJoinProject() {
  return async dispatch => {
    dispatch(setMerge({ mlPJoinProject: { isLoading: true } }));
    const query = gql`
      query ListJoinProject($type: String) {
        listJoinProject(type: $type) {
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
          status
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
    dispatch(setData({ mlPJoinProject: { listJoinProject: res.data.listJoinProject } }));
  };
}
