import {
    ADD_MONEY,
    GET_SALARY
} from "../actions/budget.actions";
  
  const initialState = {
    money: 100000
  };
  
  export function budgetReducer(state = initialState, action) {
    switch (action.type) {
      case ADD_MONEY:
        return {
          ...state,
          money: state.money + action.payload
        };
      case GET_SALARY:
        return {
          ...state,
          money: state.money - action.payload
        };
  
      default:
        return state;
    }
  }
  