import { combineReducers } from "redux";
import authReducer from "./auth";
import uiReducer from "./ui";
import imageReducer from "./images";

export default combineReducers({
  auth: authReducer,
  ui: uiReducer,
  images: imageReducer,
});
