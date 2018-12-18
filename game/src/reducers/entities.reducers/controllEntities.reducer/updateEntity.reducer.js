import {
  UPDATE_DEVELOPER,
  UPDATE_MANAGER,
  UPDATE_PROJECT
} from "../../../actions/controllEntities.actions/updateEntities.action";

import {
  updateDeveloper,
  updateManager,
  updateProject
} from "../../../tools/array.tools";

const initialState = {
  developers: [],
  managers: [],
  projects: []
};

export function updateEntityReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_DEVELOPER:
      return {
        ...state,
        isLoad: false,
        developers: updateDeveloper(state.developers, action.payload)
      };
    case UPDATE_MANAGER:
      return {
        ...state,
        managers: updateManager(state.managers, action.payload)
      };
    case UPDATE_PROJECT:
      return {
        ...state,
        isLoad: false,
        projects: updateProject(state.projects, action.payload)
      };

    default:
      return state;
  }
}
