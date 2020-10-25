import { LOGIN, REGISTER } from "../actions/types";

const initialState = {
  signinRes: {},
  signupRes: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
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
