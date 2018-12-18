export const ADD_DEVELOPER = "ADD_DEVELOPER";
export const ADD_MANAGER = "ADD_MANAGER";
export const ADD_PROJECT = "ADD_PROJECT";

export const addDeveloper = (developer) => dispatch => {
  dispatch({
    type: ADD_DEVELOPER,
    payload: developer
  });  
};

export const addManager = (manager) => dispatch => { 
  dispatch({
    type: ADD_MANAGER,
    payload: manager
  });
}

export const addProject = (project) => dispatch => { 
  dispatch({
    type: ADD_PROJECT,
    payload: project
  });
}
