import { UPLOAD_IMAGE, PREDICT_SCORE } from "../actions/types";

const initialState = {
  upload_res: {},
  prediction_res: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPLOAD_IMAGE:
      return {
        ...state,
        upload_res: action.payload["new item"],
      };
    case PREDICT_SCORE:
      // console.log(action);
      return {
        ...state,
        prediction_res: action.payload.score,
      };
    //     case DELETE_USER:
    //       return {
    //         ...state,
    //         users: state.users.filter((user) => user.id != action.payload),
    //       };
    //     case ADD_USER:
    //       return {
    //         ...state,
    //         users: [...state.users, action.payload],
    //       };
    default:
      return state;
  }
}
