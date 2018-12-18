import {
  REMOVE_DEVELOPER,
  REMOVE_MANAGER,
  REMOVE_PROJECT
} from "../../../actions/controllEntities.actions/removeEntities.action";

import { deleteOneFromArray } from "../../../tools/array.tools";

const initialState = {
  developers: [],
  managers: [],
  projects: []
};

export function removeEntityReducer(state = initialState, action) {
  switch (action.type) {
    case REMOVE_DEVELOPER:
      return {
        ...state,
        developers: deleteOneFromArray(state.developers, action.payload)
      };
    case REMOVE_MANAGER:
      return {
        ...state,
        managers: deleteOneFromArray(state.managers, action.payload)
      };
    case REMOVE_PROJECT:
      return {
        ...state,
        projects: deleteOneFromArray(state.projects, action.payload)
      };

    default:
      return state;
  }
}
