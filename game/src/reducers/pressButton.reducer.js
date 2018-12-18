import {
  PRESS_ADD_BUTTON,
  PRESS_REMOVE_BUTTON,
  PRESS_UPDATE_BUTTON
} from "../actions/pressButton.action";

const initialState = {
  button: ""
};

export function pressButtonReducer(state = initialState, action) {
  switch (action.type) {
    case PRESS_ADD_BUTTON:
      return {
        ...state,
        button: action.payload
      };
    case PRESS_REMOVE_BUTTON:
      return {
        ...state,
        button: action.payload
      };
    case PRESS_UPDATE_BUTTON:
      return {
        ...state,
        button: action.payload
      };

    default:
      return state;
  }
}
