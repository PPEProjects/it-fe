import gql from 'graphql-tag';
import { createSlice } from '@reduxjs/toolkit';
import { _slice } from 'services/reduxToolkit';
import { apolloClient, restClient } from 'services';

export const initialState = {
  cProject: {},
  mlMyProject: {},
  mlMyIdeas: {},
  deProject: { isRefresh: true },
};

const projectSlice = createSlice({
  name: 'project',
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
export const projectSelector = state => state.project;
export default projectSlice.reducer;

export function setProject(state) {
  return async dispatch => {
    dispatch(setData(state));
  };
}

export function setProjectMerge(key, item) {
  return async dispatch => {
    dispatch(setMerge({ ...{}, [key]: item }));
  };
}

export function MyProject(type = 'project') {
  return async dispatch => {
    dispatch(setMerge({ mlMyProject: { isLoading: true } }));
    const query = gql`
      query SearchProject($name: String, $type: String, $status: String) {
        searchProject(name: $name, type: $type, status: $status) {
          id
          name
          user {
            email
            id
            name
            avatar_attachment
          }
          members {
            id
            position
            memberUserId
            memberUser {
              id
              name
            }
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
          status
          memberJoin
          is_recruit
          is_involved
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
    dispatch(setData({ mlMyProject: { myProject: res.data.searchProject } }));
  };
}

export function MyIdeas(type = 'ideas') {
  return async dispatch => {
    dispatch(setMerge({ mlMyIdeas: { isLoading: true } }));
    const query = gql`
      query SearchProject($name: String, $type: String, $status: String) {
        searchProject(name: $name, type: $type, status: $status) {
          id
          name
          user {
            email
            id
            name
            avatar_attachment
          }
          members {
            id
            position
            memberUserId
            memberUser {
              id
              name
            }
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
          status
          memberJoin
          is_recruit
          is_involved
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
    dispatch(setData({ mlMyIdeas: { myIdeas: res.data.searchProject } }));
  };
}

export function createProject(values) {
  return async dispatch => {
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
            status
            memberJoin
            framework
            programingLanguage
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
      await mutationAPI().then(res => {
        console.log('res', res);
        dispatch(
          setMerge({
            cProject: {
              project: res.data.createProject,
              isLoading: false,
              isOpen: false,
            },
          })
        );
      });
    } catch (e) {
      dispatch(setMerge({ cProject: { isLoading: false } }));
    }
  };
}

export function detailProject(id) {
  return async dispatch => {
    dispatch(setMerge({ deProject: { isRefresh: false, isLoading: true } }));
    const query = gql`
      query DetailProject($detailProjectId: ID) {
        detailProject(id: $detailProjectId) {
          id
          name
          user {
            email
            id
            name
            phone_number
            avatar_attachment
          }
          members {
            id
            position
            memberUser {
              id
              name
              avatar_attachment
            }
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
          status
          memberJoin
          framework
          programingLanguage
          is_recruit
          is_involved
          createdAt
          updatedAt
          timeToDo
        }
      }
    `;
    const res = await apolloClient.query({
      query,
      variables: {
        detailProjectId: id,
      },
    });
    const detailProjectIds = res?.data?.detailProject;
    dispatch(
      setData({
        deProject: {
          detailProjectIds,
          isLoading: false,
          isRefresh: false,
        },
      })
    );
  };
}
