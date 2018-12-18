import {
  HIRE_DEVELOPER,
  HIRE_MANAGER,
} from "../../../actions/workers.actions/hireWorker.action";

import { deleteOneFromArray, findOne } from "../../../tools/array.tools";

const initialState = {
  developers: [],
  managers: [],
  projects: [],
  workers: {
    developers: [],
    managers: []
  }
};

export function hireWorkerReducer(state = initialState, action) {
  switch (action.type) {
    case HIRE_DEVELOPER:
      return {
        ...state,
        workers: {
          developers: [
            ...state.workers.developers,
            findOne(state.developers, action.payload)
          ],
          managers: [...state.workers.managers]
        },
        developers: deleteOneFromArray(state.developers, action.payload)
      };

    case HIRE_MANAGER:
      return {
        ...state,
        workers: {
          developers: [...state.workers.developers],
          managers: [
            ...state.workers.managers,
            findOne(state.managers, action.payload)
          ]
        },
        managers: deleteOneFromArray(state.managers, action.payload)
      };


    default:
      return state;
  }
}
