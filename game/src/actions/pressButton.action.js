export const PRESS_ADD_BUTTON = "PRESS_ADD_BUTTON";
export const PRESS_REMOVE_BUTTON = "PRESS_REMOVE_BUTTON";
export const PRESS_UPDATE_BUTTON = "PRESS_UPDATE_BUTTON";

export const pressAddButton = () => dispatch => {
  dispatch({
    type: PRESS_ADD_BUTTON,
    payload: "add"
  });  
};

export const pressRemoveButton = () => dispatch => { 
  dispatch({
    type: PRESS_REMOVE_BUTTON,
    payload: "remove"
  });
}

export const pressUpdateButton = () => dispatch => { 
  dispatch({
    type: PRESS_UPDATE_BUTTON,
    payload: "update"
  });
}
