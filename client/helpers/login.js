import { loginAction, logoutAction } from "../actions"

export const login = (dispatch) => {
    dispatch(loginAction())
}

export const logout = (dispatch) => {
    dispatch(logoutAction())
}