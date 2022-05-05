import gql from 'graphql-tag';
import { createSlice } from '@reduxjs/toolkit';
import { _slice } from 'services/reduxToolkit';
import { apolloClient, restClient } from 'services';

export const initialState = {
  upMemberProject: {},
  upMemberProjectUserIds: {},
  dMemberProject: {},
  deProject: { isRefresh: true },
  cCreateProjectMembers: {},
  projects: {},
  deMemberByIdProject: {},
  deProjectMemberByPosition: {},
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

export function deleteMemberProject(id) {
  return async dispatch => {
    dispatch(setMerge({ dMemberProject: { isLoading: true } }));
    const mutationAPI = () => {
      const mutation = gql`
        mutation DeleteProjectMembers($deleteProjectMembersId: ID) {
          deleteProjectMembers(id: $deleteProjectMembersId)
        }
      `;
      return apolloClient.mutate({
        mutation,
        variables: {
          deleteProjectMembersId: id,
        },
      });
    };

    try {
      await mutationAPI().then(res => {
        dispatch(
          setMerge({
            deleProject: {
              dMemberProject: res.data.DeleteProjectMembers,
              isLoading: false,
            },
          })
        );
      });
    } catch (e) {
      dispatch(setMerge({ dMemberProject: { isLoading: false } }));
    }
  };
}

export function getMyProjects() {
  return async dispatch => {
    dispatch(setMerge({ projects: { isLoading: true } }));
    const query = gql`
      query DetailProjectMemberByIdPm {
        detailProjectMemberByIdPm {
          createdAt
          deleted
          fee
          id
          project {
            id
            level
            name
            attachments
            status
            contentStatus
            user {
              id
              avatar_attachment
            }
          }
        }
      }
    `;
    const res = await apolloClient.query({
      query,
    });
    dispatch(setData({ projects: { detailProject: res.data.detailProjectMemberByIdPm } }));
  };
}

export function updateMyProject({ project }, level) {
  return async (dispatch, getState) => {
    try {
      const res = await apolloClient.mutate({
        mutation: gql`
          mutation UpdateProject($data: ProjectInput!) {
            updateProject(data: $data) {
              id
              level
              status
            }
          }
        `,
        variables: {
          data: {
            id: project.id,
            level: level,
          },
        },
      });

      const { projects } = getState().memberProject;

      const index = Object.values(projects).findIndex(
        _project => _project.project?.id === project.id
      );

      projects[index].project = Object.assign({}, projects[index].project, res.data.updateProject);

      dispatch(setMerge({ projects }));
    } catch (e) {}
  };
}

export function UpsertProjectMembersUserIds(values) {
  return async dispatch => {
    dispatch(setMerge({ upMemberProjectUserIds: { isLoading: true } }));
    const mutationAPI = () => {
      const mutation = gql`
        mutation UpsertProjectMembersUserIds($data: ProjectMembersInputId!) {
          upsertProjectMembersUserIds(data: $data) {
            id
            pmUserId
            projectId
            project {
              id
              name
            }
            memberUserId
            position
            linkTest
            salary
            fee
            status
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
            upMemberProjectUserIds: {
              project: res.data.UpsertProjectMembersUserIds,
              isLoading: false,
              isOpen: false,
            },
          })
        );
      });
    } catch (e) {
      dispatch(setMerge({ upMemberProjectUserIds: { isLoading: false } }));
    }
  };
}

export function detailProjectMember(id) {
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
          // isLoading: false,
          // isRefresh: false,
        },
      })
    );
  };
}

export function deleteProjectMemberId(id) {
  return async dispatch => {
    dispatch(setMerge({ dProjectMemberId: { isLoading: true } }));
    const mutationAPI = () => {
      const mutation = gql`
        mutation DeleteProjectMembers($deleteProjectMembersId: ID) {
          deleteProjectMembers(id: $deleteProjectMembersId)
        }
      `;
      return apolloClient.mutate({
        mutation,
        variables: {
          deleteProjectMembersId: id,
        },
      });
    };

    try {
      await mutationAPI().then(res => {
        dispatch(
          setMerge({
            deleProject: {
              dProjectMemberId: res.data.deleteProjectMembersId,
              isLoading: false,
            },
          })
        );
      });
    } catch (e) {
      dispatch(setMerge({ dProjectMemberId: { isLoading: false } }));
    }
  };
}

export function CreateProjectMembers(values) {
  return async dispatch => {
    dispatch(setMerge({ cCreateProjectMembers: { isLoading: true } }));
    const mutationAPI = () => {
      const mutation = gql`
        mutation CreateProjectMembers($data: ProjectMembersInput!) {
          createProjectMembers(data: $data) {
            id
            pmUserId
            projectId
            project {
              id
              name
            }
            memberUserId
            position
            linkTest
            salary
            fee
            status
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
            cCreateProjectMembers: {
              project: res.data.UpsertProjectMembersUserIds,
              isLoading: false,
              isOpen: false,
            },
          })
        );
      });
    } catch (e) {
      dispatch(setMerge({ cCreateProjectMembers: { isLoading: false } }));
    }
  };
}

export function UpdateProjectMembers(values) {
  return async dispatch => {
    dispatch(setMerge({ upMemberProjectUserIds: { isLoading: true } }));
    const mutationAPI = () => {
      const mutation = gql`
        mutation UpdateProjectMembers($data: ProjectMembersInput!) {
          updateProjectMembers(data: $data) {
            id
            pmUserId
            projectId
            memberUserId
            position
            linkTest
            salary
            fee
            status
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
            upMemberProjectUserIds: {
              project: res.data.UpdateProjectMembers,
              isLoading: false,
              isOpen: false,
            },
          })
        );
      });
    } catch (e) {
      dispatch(setMerge({ upMemberProjectUserIds: { isLoading: false } }));
    }
  };
}

export function detailMemberByIdProject(id) {
  return async dispatch => {
    dispatch(setMerge({ deMemberByIdProject: { isLoading: true } }));
    const query = gql`
      query DetailMemberByIdProject($projectId: ID) {
        detailMemberByIdProject(projectId: $projectId) {
          id
          pmUserId
          projectId
          project {
            id
            name
          }
          memberUserId
          memberUser {
            id
            name
            email
            phone_number
            avatar_attachment
          }
          userFeedback {
            id
            grate
            content
          }
          position
          linkTest
          salary
          fee
          status
          createdAt
          updatedAt
        }
      }
    `;
    const res = await apolloClient.query({
      query,
      variables: {
        projectId: id,
      },
    });
    const detailMemberByIdProject = res?.data?.detailMemberByIdProject;
    dispatch(
      setData({
        deMemberByIdProject: {
          detailMemberByIdProject,
        },
      })
    );
  };
}

export function detailProjectMemberByPosition(position) {
  return async dispatch => {
    dispatch(setMerge({ deMemberByIdProject: { isLoading: true } }));
    const query = gql`
      query DetailProjectMemberByPosition($position: String) {
        detailProjectMemberByPosition(position: $position) {
          id
          projectId
          roles
          pmUserId
          project {
            name
            attachments
            type
            user {
              id
              name
              avatar_attachment
            }
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
    const detailProjectMemberByPosition = res?.data?.detailProjectMemberByPosition;
    dispatch(
      setData({
        deProjectMemberByPosition: {
          detailProjectMemberByPosition,
        },
      })
    );
  };
}
