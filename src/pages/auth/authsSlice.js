import { createSlice } from "@reduxjs/toolkit"
import { _slice } from "services/reduxToolkit"
import { apolloClient } from "services"
import gql from "graphql-tag"
import Cookies from "universal-cookie"
const cookies = new Cookies()

export const initialState = {
    lUser: {},
    reAuth: {},
    gMe: {},
    errSystem: {},
    resetPassword: {},
}

const authsSlice = createSlice({
    name: "auths",
    initialState,
    reducers: {
        setData: (state, { payload }) => {
            state = _slice.setData(initialState, state, payload)
        },
        setMerge: (state, { payload }) => {
            state = _slice.setMerge(initialState, state, payload)
        },
    },
})

export const { setData, setMerge } = authsSlice.actions
export const authsSelector = (state) => state.auths
export default authsSlice.reducer

export function setAuth(state) {
    return async (dispatch) => {
        dispatch(setData(state))
    }
}

export function setAuthMerge(key, item) {
    return async (dispatch) => {
        dispatch(setMerge({ ...{}, [key]: item }))
    }
}

export function authRegister(variables) {
    return async (dispatch) => {
        dispatch(setData({ reAuth: { isLoading: true } }))
        const mutationAPI = () => {
            const mutation = gql`
            mutation Mutation($email: String!, $password: String!) {
                signup(email: $email, password: $password) {
                  token
                  user {
                    email
                    password
                  }
                }
              }
`
            return apolloClient.mutate({
                mutation,
                variables
            })
        }
        try {
            await mutationAPI().then(res => {
                console.log("res", res)
                if (res?.data?.signup?.token && res?.data?.signup?.user) {
                    cookies.set('ppe-token', res.data.signup.token,
                        { path: '/', expires: new Date(Date.now() + 99999999999) })
                    window.location.assign('/OnboardingPage')
                    dispatch(setMerge({
                        reAuth: {
                            isLoading: false,
                            data: res.data.signup,
                            email: res.data.signup.user.email,
                        },
                    }))
                }
            })
        } catch (e) {
            dispatch(setMerge({ reAuth: { isLoading: false } }))
        }
    }
}

export function authLogin(variables) {
    return async (dispatch) => {
        dispatch(setData({ reAuth: { isLoading: true } }))
        const mutationAPI = () => {
            const mutation = gql`
            mutation Mutation($email: String!, $password: String!) {
                login(email: $email, password: $password) {
                  token
                  user {
                    email
                    password
                    id
                  }
                }
              }
`
            return apolloClient.mutate({
                mutation,
                variables,
            })
        }
        try {
            await mutationAPI().then(res => {
                console.log("res", res)
                if (res?.data?.login?.token && res?.data?.login?.user) {
                    cookies.set('ppe-token', res?.data?.login?.token,
                        { path: '/', expires: new Date(Date.now() + 99999999999) })
                    window.location.assign('/OnboardingPage')
                    dispatch(setMerge({
                        reAuth: {
                            isLoading: false,
                            data: res.data.login
                        },
                    }))
                }
            })
        } catch (e) {
            dispatch(setMerge({ reAuth: { isLoading: false } }))
        }
    }
}

export function resetPasswordRequest(variables) {
    return async (dispatch) => {
        dispatch(setData({ resetPassword: { isLoading: true } }))
        const mutationAPI = () => {
            const mutation = gql`
            mutation Login($email: String!) {
                resetPasswordRequest(email: $email) {
                  token
                  user {
                    email
                  }
                }
              }
`
            return apolloClient.mutate({
                mutation,
                variables,
            })
        }
        try {
            await mutationAPI().then(res => {
                console.log("res", res)
                if (res?.data?.resetPasswordRequest?.user?.email) {
                    cookies.set('ppe-token', res?.data?.resetPasswordRequest?.token,
                        { path: '/', expires: new Date(Date.now() + 99999999999) })
                    dispatch(setMerge({
                        resetPassword: {
                            isLoading: false,
                            email: res.data.resetPasswordRequest.user.email,
                            token: res.data.resetPasswordRequest.token
                        },
                    }))
                }
            })
        } catch (e) {
            dispatch(setMerge({ resetPassword: { isLoading: false } }))
        }
    }
}

export function authResetPassword(variables) {
    console.log("varrrrrrr", variables)
    return async (dispatch) => {
        dispatch(setData({ resetPassword: { isLoading: true, isChangePasswordSuccess: false } }))
        const mutationAPI = () => {
            const mutation = gql`
            mutation ResetPasswordRequest($token: String!, $password: String!) {
                resetPassword(token: $token, password: $password) {
                  password
                }
              }
`
            return apolloClient.mutate({
                mutation,
                variables,
            })
        }
        try {
            await mutationAPI().then(res => {
                console.log("res", res)
                if (res) {
                    dispatch(setMerge({
                        resetPassword: {
                            isLoading: false,
                            isChangePasswordSuccess: true
                        },
                    }))
                }
            })
        } catch (e) {
            dispatch(setMerge({ resetPassword: { isLoading: false, isChangePasswordSuccess: false } }))
        }
    }
}


