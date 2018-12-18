export const FIRE_DEVELOPER = "FIRE_DEVELOPER";
export const FIRE_MANAGER = "FIRE_MANAGER";

export const fireDeveloper = (id) => dispatch => {
  dispatch({
    type: FIRE_DEVELOPER,
    payload: id
  });  
};

export const fireManager = (id) => dispatch => { 
  dispatch({
    type: FIRE_MANAGER,
    payload: id
  });
}

