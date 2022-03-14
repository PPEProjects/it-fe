import { createSlice } from '@reduxjs/toolkit';
import { _slice } from 'services/reduxToolkit';
import { apolloClient, restClient } from 'services';
import Cookies from 'universal-cookie';

export const initialState = {
  lAuth: {},
  iAuth: {},
  rAuth: {},
  loAuth: {},
  fAuth: {},
  vAuth: {},
  chAuth: {},
  url: '',
  checkExistsAuth: {},
  addAuth: {},
  media_id: null,
};

const authsSlice = createSlice({
  name: 'auths',
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

export const { setData, setMerge } = authsSlice.actions;
export const authsSelector = state => state.auths;
export default authsSlice.reducer;

export function setAuth(state) {
  return async dispatch => {
    dispatch(setData(state));
  };
}

export function setAuthMerge(key, item) {
  return async dispatch => {
    dispatch(setMerge({ ...{}, [key]: item }));
  };
}

export function authLogin(values) {
  const cookies = new Cookies();
  return async dispatch => {
    dispatch(setMerge({ lAuth: { isLoading: true } }));
    const res = await restClient.post('/ppe-core/auth/login', values);
    if (res?.data?.data?.token) {
      cookies.set('ppe-it', res.data.data.token, {
        path: '/',
        expires: new Date(Date.now() + 25920000000),
      });
      window.location.assign('/AllPage');
    }
    if (res?.data?.data?.token && res?.data?.data?.roles[0] === 'admin') {
      cookies.set('ppe-it', res.data.data.token, {
        // path: "/admin/TableGoalList/GoalTemplateList",
        path: '/AllAdmin',
        expires: new Date(Date.now() + 25920000000),
      });
      // window.location.assign("/admin/TableGoalList/GoalTemplateList");
      window.location.assign('/AllAdmin');
    }
    dispatch(setMerge({ lAuth: { isLoading: false } }));
  };
}

export function authRegister(values) {
  const cookies = new Cookies();
  return async dispatch => {
    dispatch(setMerge({ rAuth: { isLoading: true } }));
    const res = await restClient.post('/ppe-core/auth/register', values);
    if (res?.data?.data?.access_token) {
      cookies.set('ppe-it', res.data.data.access_token, {
        path: '/',
        expires: new Date(Date.now() + 25920000000),
      });
      window.location.assign('/AllPage');
    }
    dispatch(setMerge({ rAuth: { isLoading: false } }));
  };
}

export function authRegister1(values) {
  return restClient.post('/ppe-core/auth/register', values);
}

export function authCheckExists(obj) {
  return async dispatch => {
    dispatch(setData({ checkExistsAuth: { isLoading: true } }));
    const res = await restClient.post('/ppe-core/auth/email-check', obj);
    dispatch(setData({ checkExistsAuth: { email: res?.data?.status } }));
  };
}

export function authLogout() {
  const cookies = new Cookies();
  return async dispatch => {
    dispatch(setMerge({ loAuth: { isLoading: true } }));
    const res = await restClient.get('/ppe-core/auth/logout');
    cookies.remove('ppe-it');
    dispatch(setMerge({ loAuth: { isLoading: false } }));
    window.location.assign('/LoginPage');
  };
}

export function authForgotPassword(values) {
  return async dispatch => {
    dispatch(setMerge({ fAuth: { isLoading: true } }));
    const res = await restClient.post('/ppe-core/auth/reset-password', values);
    dispatch(setMerge({ fAuth: { data: res?.data, isLoading: false } }));
  };
}

export function authVerifyEmail(values) {
  return async dispatch => {
    dispatch(setData({ vAuth: { isLoading: true } }));
    const res = await restClient.post('/ppe-core/auth/reset', values);
    dispatch(setMerge({ vAuth: { isLoading: false, data: res?.data } }));
  };
}
export function authChangePassword(values) {
  return async dispatch => {
    dispatch(setData({ chAuth: { isLoading: true } }));
    const res = await restClient.post('/ppe-core/auth/change-pass', values);
    dispatch(setMerge({ chAuth: { isLoading: false, data: res?.data } }));
  };
}

export function getUrlGoogle(values) {
  return async dispatch => {
    dispatch(setData({ iAuth: { isLoading: true } }));
    const res = await restClient.get('/ppe-core/auth/generate-url?platform=google');
    dispatch(setMerge({ iAuth: { data: res?.data?.data } }));
  };
}

export function getUrlFacebook(values) {
  return async dispatch => {
    dispatch(setData({ iAuth: { isLoading: true } }));
    const res = await restClient.get('/ppe-core/auth/generate-url?platform=facebook');
    console.log(res);
    dispatch(setMerge({ iAuth: { data: res?.data?.data } }));
  };
}
export function authLoginPusher(res) {
  const cookies = new Cookies();
  return async dispatch => {
    dispatch(setMerge({ lAuth: { isLoading: true } }));
    if (res) {
      console.log('token res = ', res);
      cookies.set('ppe-it', res, {
        path: '/',
        expires: new Date(Date.now() + 25920000000),
      });
      window.location.assign('/AllPage');
    }
    dispatch(setMerge({ lAuth: { isLoading: false } }));
  };
}
