import axios from "axios";

import { REGISTER, LOGIN,  GET_ERRORS } from "./types";

// LOGIN USERS

export const login = (credentials) => (dispatch) => {
  axios
    .post("/api_user/login/",{
        password: credentials.password,
        username: credentials.email
    })
    .then((res) => {
      dispatch({
        type: LOGIN,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// REGISTER USER

export const register = (userData) => (dispatch) => {
  axios
    .post(`/api_user/register/`, userData)
    .then((res) => {
      dispatch({
        type: REGISTER,
        payload: res.data,
      });
    })
    .catch((err) => {
      const errors = {
        msg: err.response.data,
        status: err.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors,
      });
    });
};
