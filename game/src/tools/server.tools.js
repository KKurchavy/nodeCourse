import Developer from '../classes/developer';
import Manager from '../classes/manager';
import Project from '../classes/project';

export const DATA_SERVER_URL = "http://localhost:8080/";

export function getArrayFromServer(constructor) {
  const className = getNameForRequest(constructor.name);

  return new Promise((resolve, reject) => {
    fetch(`${DATA_SERVER_URL}${className}/`, { method: "get" })
      .then(res => res.json())
      .then(res => {
        resolve(
          res.map(element => {
            return new constructor(element);
          })
        );
      })

      .catch(err => reject(err));
  });
}

function getElementByOptions(type, options) {
  const obj = {};
  switch(type) {
      case "developer": 
          obj.name = options[0];
          obj.surname = options[1];
          obj.level = options[2];
          obj.salary = +options[3];
          return new Developer(obj);
      case "manager":
          obj.name = options[0];
          obj.surname = options[1];
          obj.experience = +options[2];
          obj.salary = +options[3];
          return new Manager(obj);
      case "project":
          obj.name = options[0];
          obj.cost = +options[1];
          obj.linesCount = +options[2];
          return new Project(obj);

      default: return 
  }
  
}

export function addOne(OPTIONS) {
  const TYPE = OPTIONS[0];
  const element = getElementByOptions(TYPE, OPTIONS.slice(1));

  const path = `${DATA_SERVER_URL}${getNameForRequest(TYPE)}/`;
  const body = JSON.stringify(element);

  fetch(path, {
      method: "post",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      body: body
  })
  
  return { 
    entity: element,
    type: TYPE
  };
}

export function updateOne(OPTIONS) {
  const TYPE = OPTIONS[0];
  const ID = OPTIONS[1];
  const element = getElementByOptions(TYPE, OPTIONS.slice(2));

  const path = `${DATA_SERVER_URL}${getNameForRequest(TYPE)}/${ID}`;
  const body = JSON.stringify(element);

  fetch(path, {
      method: "put",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      body: body
  })

  return { 
    entity: {...element, id: ID},
    type: TYPE
  };
}

export function removeOne(OPTIONS) {
  const TYPE = OPTIONS[0];
  const ID = OPTIONS[1];

  const path = `${DATA_SERVER_URL}${getNameForRequest(TYPE)}/${ID}`;

  fetch(path, {
      method: "delete"
  });

  return { 
    id: ID,
    type: TYPE
  };
}

function getNameForRequest(name) {
  switch (name.toLowerCase()) {
    case "developer":
      return "developers";
    case "manager":
      return "managers";
    case "project":
      return "projects";
    default:
      return "";
  }
}
