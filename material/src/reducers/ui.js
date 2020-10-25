import { DRAWER_TOGGLE } from "../actions/types";

const initialState = {
  drawerOpen: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case DRAWER_TOGGLE:
      return {
        ...state,
        drawerOpen: action.payload,
      };
    default:
      return state;
  }
}
