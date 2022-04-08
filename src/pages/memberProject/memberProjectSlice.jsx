import gql from 'graphql-tag';
import { createSlice } from '@reduxjs/toolkit';
import { _slice } from 'services/reduxToolkit';
import { apolloClient, restClient } from 'services';

export const initialState = {
  upMemberProject: {},
  dMemberProject: {},
  projects: {},
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
    try {
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

      console.log(res.data?.detailProjectMemberByIdPm);
      // console.log(res)

      dispatch(
        setMerge({
          projects: res.data?.detailProjectMemberByIdPm || [],
        })
      );
    } catch (e) {}
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
