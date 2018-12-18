import Developer from "../classes/developer";
import Manager from "../classes/manager";
import Project from "../classes/project";

import { getArrayFromServer } from "../tools/server.tools";

export const LOAD_DEVS_SUCCESS = "LOAD_DEVELOPERS_SUCCESS";
export const LOAD_MANAGERS_SUCCESS = "LOAD_MANAGERS_SUCCESS";
export const LOAD_PROJECTS_SUCCESS = "LOAD_PROJECTS_SUCCESS";

export const LOAD_DEVS_EROR = "LOAD_DEVS_SUCCESS";
export const LOAD_MANAGERS_EROR = "LOAD_MANAGERS_SUCCESS";
export const LOAD_PROJECTS_EROR = "LOAD_PROJECTS_SUCCESS";

export const entitiesAction = () => dispatch => {
  getArrayFromServer(Developer)
    .then(developers => {
      dispatch({
        type: LOAD_DEVS_SUCCESS,
        payload: developers
      });
    })

    .catch(err => {
      dispatch({
        type: LOAD_DEVS_EROR,
        payload: []
      });
    });

  getArrayFromServer(Manager)
    .then(managers => {
      dispatch({
        type: LOAD_MANAGERS_SUCCESS,
        payload: managers
      });
    })

    .catch(err => {
      dispatch({
        type: LOAD_MANAGERS_EROR,
        payload: []
      });
    });

  getArrayFromServer(Project)
    .then(projects => {
      dispatch({
        type: LOAD_PROJECTS_SUCCESS,
        payload: projects
      });
    })

    .catch(err => {
      dispatch({
        type: LOAD_PROJECTS_EROR,
        payload: []
      });
    });
};
