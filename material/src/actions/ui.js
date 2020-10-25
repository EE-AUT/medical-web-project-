import { DRAWER_TOGGLE } from "./types";

// UPLOAD IMAGE

export const drawerToggle = (open) => (dispatch) => {
  dispatch({
    type: DRAWER_TOGGLE,
    payload: open,
  });
};
