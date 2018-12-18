import {
    FIRE_DEVELOPER,
    FIRE_MANAGER,
  } from "../../../actions/workers.actions/fireWorker.action";
  
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
  
  export function fireWorkerReducer(state = initialState, action) {
    switch (action.type) {
      case FIRE_DEVELOPER:
        return {
          ...state,
          developers: [...state.developers, findOne(state.workers.developers, action.payload)],
          workers: {
            developers: deleteOneFromArray(state.workers.developers, action.payload),
            managers: [...state.workers.managers]
          }
        };
  
      case FIRE_MANAGER:
        return {
          ...state,
          managers: [...state.managers, findOne(state.workers.managers, action.payload)],
          workers: {
            developers: [...state.workers.developers],
            managers: deleteOneFromArray(state.workers.managers, action.payload),
          }
        };
  
  
      default:
        return state;
    }
  }
  