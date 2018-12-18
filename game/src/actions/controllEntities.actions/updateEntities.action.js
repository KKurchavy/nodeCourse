export const UPDATE_DEVELOPER = "UPDATE_DEVELOPER";
export const UPDATE_MANAGER = "UPDATE_MANAGER";
export const UPDATE_PROJECT = "UPDATE_PROJECT";

export const updateDeveloper = (developer) => dispatch => {
  dispatch({
    type: UPDATE_DEVELOPER,
    payload: developer
  });  
};

export const updateManager = (manager) => dispatch => { 
  dispatch({
    type: UPDATE_MANAGER,
    payload: manager
  });
}

export const updateProject = (project) => dispatch => { 
  dispatch({
    type: UPDATE_PROJECT,
    payload: project
  });
}
