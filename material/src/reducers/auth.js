import { LOGIN, REGISTER } from "../actions/types";

const initialState = {
  loggedIn: false,
  token: "",
  signinRes: {},
  signupRes: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      let loggedIn = false;
      let token = "";
      if (action.payload.token === undefined) {
        loggedIn = false;
        token = "";
      } else {
        loggedIn = true;
        token = action.payload.token;
      }
      return {
        ...state,
        loggedIn,
        token,
        signinRes: action.payload,
      };
    case REGISTER:
      return {
        ...state,
        signupRes: action.payload,
      };
    default:
      return state;
  }
}
