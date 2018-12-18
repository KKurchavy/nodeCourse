export const LOAD_DEVS_SUCCESS = "LOAD_DEVELOPERS_SUCCESS";
export const ADD_MONEY = "ADD_MONEY";
export const GET_SALARY = "GET_SALARY";


export const addMoney = (count) => dispatch => {
  dispatch({
    type: ADD_MONEY,
    payload: count
  })
};

export const getSalary = (count) => dispatch => {
    dispatch({
      type: GET_SALARY,
      payload: count
    })
};
