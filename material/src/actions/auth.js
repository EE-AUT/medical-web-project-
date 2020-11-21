import axios from "axios";

import { REGISTER, LOGIN, AUTO_LOGIN, GET_ERRORS } from "./types";

// LOGIN USERS

export const login = (credentials) => (dispatch) => {
  axios
    .post("/api_user/login/", {
      password: credentials.password,
      username: credentials.email,
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
    .post(`http://localhost:3005/register/`, userData)
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

// AUTO LOGIN WITH EACH REQUEST

export const autoLogin = () => (dispatch) => {
  axios
    .post(
      "http://localhost:3005/autoLogin",
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
    .then((res) => {
      console.log("res ", res);
    })
    .catch((err) => {
      localStorage.clear();
      dispatch({
        type: LOGIN,
        payload: err,
      });
    });
};
