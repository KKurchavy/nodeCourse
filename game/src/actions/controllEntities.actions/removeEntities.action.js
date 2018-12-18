export const REMOVE_DEVELOPER = "REMOVE_DEVELOPER";
export const REMOVE_MANAGER = "REMOVE_MANAGER";
export const REMOVE_PROJECT = "REMOVE_PROJECT";

export const removeDeveloper = (id) => dispatch => {
  dispatch({
    type: REMOVE_DEVELOPER,
    payload: id
  });  
};

export const removeManager = (id) => dispatch => { 
  dispatch({
    type: REMOVE_MANAGER,
    payload: id
  });
}

export const removeProject = (id) => dispatch => { 
  dispatch({
    type: REMOVE_PROJECT,
    payload: id
  });
}
