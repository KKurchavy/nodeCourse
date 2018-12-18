import { combineReducers } from "redux";


import entitiesReducer from "./entities.reducers/entities.reducer";
import { pressButtonReducer } from './pressButton.reducer';
import { budgetReducer } from './budget.reducer';



export default combineReducers({
  entities: entitiesReducer,
  pressButton: pressButtonReducer,
  budget: budgetReducer
});
