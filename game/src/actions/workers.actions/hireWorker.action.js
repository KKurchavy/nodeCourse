export const HIRE_DEVELOPER = "HIRE_DEVELOPER";
export const HIRE_MANAGER = "HIRE_MANAGER";

export const hireDeveloper = (id) => dispatch => {
  dispatch({
    type: HIRE_DEVELOPER,
    payload: id
  });  
};

export const hireManager = (id) => dispatch => { 
  dispatch({
    type: HIRE_MANAGER,
    payload: id
  });
}

