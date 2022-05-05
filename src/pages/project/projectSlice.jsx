import gql from 'graphql-tag';
import { createSlice } from '@reduxjs/toolkit';
import { _slice } from 'services/reduxToolkit';
import { apolloClient, restClient } from 'services';

export const initialState = {
  cProject: {},
  cProjectLike: {},
  cProjectInterested: {},
  mlMyProject: {},
  mlMyIdeaProject: {},
  mlMyIdeas: {},
  deProject: { isRefresh: true },
  dProjectLike: {},
  dProjectInterested: {},
  mlProjectInterested: {},
  mlPJoinProject: {},
  upStatusProject: {},
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
            linkTest
            memberUserId
            memberUser {
              id
              name
              avatar_attachment
            }
          }
          companies
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
          projectLikes {
            id
            userId
            projectId
          }
          projectInterested {
            id
            userId
            projectId
          }
          numberLikes
          numberInterested
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
          projectLikes {
            id
            userId
            projectId
          }
          projectInterested {
            id
            userId
            projectId
          }
          numberLikes
          numberInterested
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

export function detailProjectMemberByPosition(position) {
  return async dispatch => {
    dispatch(setMerge({ mlMyIdeaProject: { isLoading: true } }));
    const query = gql`
      query DetailProjectMemberByPosition($position: String) {
        detailProjectMemberByPosition(position: $position) {
          id
          projectId
          roles
          pmUserId
          project {
            id
            name
            attachments
            type
            user {
              id
              name
              avatar_attachment
            }
            status
          }
        }
      }
    `;
    const res = await apolloClient.query({
      query,
      variables: {
        position: position,
      },
    });
    dispatch(
      setData({ mlMyIdeaProject: { myIdeaProject: res.data.detailProjectMemberByPosition } })
    );
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
            contentStatus
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
      console.log(e);
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
          is_involved
          projectLikes {
            id
            projectId
            userId
          }
          numberInterested
          projectInterested {
            id
            projectId
            userId
          }
          numberLikes
          salary
          status
          contentStatus
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

export function createProjectLike(values) {
  return async dispatch => {
    dispatch(setMerge({ cProjectLike: { isLoading: true } }));
    const mutationAPI = () => {
      const mutation = gql`
        mutation Mutation($data: ProjectLikesInput!) {
          createProjectLikes(data: $data) {
            id
            userId
            projectId
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
            cProjectLike: {
              project: res.data.createProjectLikes,
              isLoading: false,
              isOpen: false,
            },
          })
        );
      });
    } catch (e) {
      dispatch(setMerge({ cProjectLike: { isLoading: false } }));
    }
  };
}

export function deleteProjectLike(id) {
  return async dispatch => {
    dispatch(setMerge({ dProjectLike: { isLoading: true } }));
    const mutationAPI = () => {
      const mutation = gql`
        mutation CreateProjectInterested($deleteProjectLikesId: ID) {
          deleteProjectLikes(id: $deleteProjectLikesId)
        }
      `;
      return apolloClient.mutate({
        mutation,
        variables: {
          deleteProjectLikesId: id,
        },
      });
    };

    try {
      await mutationAPI().then(res => {
        dispatch(
          setMerge({
            deleProject: {
              dProjectLike: res.data.deleteProjectLikes,
              isLoading: false,
            },
          })
        );
      });
    } catch (e) {
      dispatch(setMerge({ dProjectLike: { isLoading: false } }));
    }
  };
}

export function createProjectInterested(values) {
  return async dispatch => {
    dispatch(setMerge({ cProjectInterested: { isLoading: true } }));
    const mutationAPI = () => {
      const mutation = gql`
        mutation CreateProjectInterested($data: ProjectInterestedInput!) {
          createProjectInterested(data: $data) {
            id
            projectId
            createdAt
            updatedAt
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
            cProjectInterested: {
              project: res.data.createProjectInterested,
              isLoading: false,
              isOpen: false,
            },
          })
        );
      });
    } catch (e) {
      dispatch(setMerge({ cProjectInterested: { isLoading: false } }));
    }
  };
}

export function deleteProjectInterested(id) {
  return async dispatch => {
    dispatch(setMerge({ dProjectInterested: { isLoading: true } }));
    const mutationAPI = () => {
      const mutation = gql`
        mutation Mutation($deleteProjectInterestedId: ID) {
          deleteProjectInterested(id: $deleteProjectInterestedId)
        }
      `;
      return apolloClient.mutate({
        mutation,
        variables: {
          deleteProjectInterestedId: id,
        },
      });
    };

    try {
      await mutationAPI().then(res => {
        dispatch(
          setMerge({
            deleProject: {
              dProjectInterested: res.data.deleteProjectInterested,
              isLoading: false,
            },
          })
        );
      });
    } catch (e) {
      dispatch(setMerge({ dProjectInterested: { isLoading: false } }));
    }
  };
}

export function myProjectInterested() {
  return async dispatch => {
    dispatch(setMerge({ mlProjectInterested: { isLoading: true } }));
    const query = gql`
      query MyProjectInterested {
        myProjectInterested {
          id
          projectId
          project {
            id
            name
            status
            user {
              id
              name
              avatar_attachment
            }
            attachments
            description
            level
            privacy
            type
          }
        }
      }
    `;
    const res = await apolloClient.query({
      query,
    });
    dispatch(
      setData({ mlProjectInterested: { myProjectInterested: res.data.myProjectInterested } })
    );
  };
}

export function updateStatusProject(values) {
  return async dispatch => {
    dispatch(setMerge({ upStatusProject: { isLoading: true } }));
    const mutationAPI = () => {
      const mutation = gql`
        mutation UpdateProject($data: ProjectInput!) {
          updateProject(data: $data) {
            id
            status
            contentStatus
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
            upStatusProject: {
              updateProject: res.data.updateProject,
              isLoading: false,
              isOpen: false,
            },
          })
        );
      });
    } catch (e) {
      console.log(e);
      dispatch(setMerge({ upStatusProject: { isLoading: false } }));
    }
  };
}
