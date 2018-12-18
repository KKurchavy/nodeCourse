import reduceReducers from 'reduce-reducers';

import { loadSuccessReducer } from "./loadSuccess.reducer";
import { loadFailedReducer } from "./loadFailed.reducer";
import { addEntityReducer } from "./controllEntities.reducer/addEntity.reducer";
import { removeEntityReducer } from "./controllEntities.reducer/removeEntity.reducer";
import { updateEntityReducer } from "./controllEntities.reducer/updateEntity.reducer";
import { hireWorkerReducer } from "./workers.reducers/hireWorker.reducer";
import { fireWorkerReducer } from "./workers.reducers/fireWorker.reducer";

const inittialState = {
  developers: [],
  managers: [],
  projects: [],
  isLoad: true,
  workers: {
    developers: [],
    managers: []
  }
}

export default reduceReducers(
  loadFailedReducer,
  loadSuccessReducer,
  addEntityReducer,
  removeEntityReducer,
  updateEntityReducer,
  hireWorkerReducer,
  fireWorkerReducer,
  inittialState
);