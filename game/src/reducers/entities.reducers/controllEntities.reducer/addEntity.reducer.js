import {
  ADD_DEVELOPER,
  ADD_MANAGER,
  ADD_PROJECT
} from "../../../actions/controllEntities.actions/addEntities.action";

const initialState = {
  developers: [],
  managers: [],
  projects: []
};

export function addEntityReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_DEVELOPER:
      return {
        ...state,
        isLoad: false,
        developers: [...state.developers, action.payload]
      };

    case ADD_MANAGER:
      return {
        ...state,
        managers: [...state.managers, action.payload]
      };

    case ADD_PROJECT:
      return {
        ...state,
        isLoad: false,
        projects: [...state.projects, action.payload]
      };

    default:
      return state;
  }
}
