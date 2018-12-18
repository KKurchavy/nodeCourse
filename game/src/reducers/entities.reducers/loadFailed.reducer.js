import {
  LOAD_DEVS_EROR,
  LOAD_MANAGERS_EROR,
  LOAD_PROJECTS_EROR
} from "../../actions/entities.action";

const initialState = {
  isLoad: true,
  developers: [],
  managers: [],
  projects: []
};

export function loadFailedReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_DEVS_EROR:
      return {
        ...state,
        isLoad: false,
        developers: []
      };

    case LOAD_MANAGERS_EROR:
      return {
        ...state,
        managers: []
      };

    case LOAD_PROJECTS_EROR:
      return {
        ...state,
        isLoad: false,
        projects: []
      };

    default:
      return state;
  }
}
