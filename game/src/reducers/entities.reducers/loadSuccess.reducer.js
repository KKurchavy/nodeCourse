import {
    LOAD_DEVS_SUCCESS,
    LOAD_MANAGERS_SUCCESS,
    LOAD_PROJECTS_SUCCESS
  } from "../../actions/entities.action";
  
  const initialState = {
    isLoad: true,
    developers: [],
    managers: [],
    projects: []
  };
  
  export function loadSuccessReducer(state = initialState, action) {
    
    switch (action.type) {
      case LOAD_DEVS_SUCCESS:
        return {
            ...state,
            isLoad: false,
            developers: action.payload
        };

      case LOAD_MANAGERS_SUCCESS:
        return {
          ...state,
          isLoad: false,
          managers: action.payload
        };

      case LOAD_PROJECTS_SUCCESS:
        return {
          ...state,
          isLoad: false,
          projects: action.payload
        };
  
      default:
        return state;
    }
  }
  