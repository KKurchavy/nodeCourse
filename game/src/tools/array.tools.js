export function deleteOneFromArray(arr, id) {
  const index = arr.findIndex(elem => elem.id === id);
  arr.splice(index, 1);

  return [...arr];
}
export function updateDeveloper(arr, { name, surname, level, salary, id }) {
  const developer = findOne(arr, id);
  developer.name = name || developer.name;
  developer.surname = surname || developer.surname;
  developer.level = level || developer.level;
  developer.salary = salary || developer.salary;

  return [...arr];
}
export function updateManager(arr, { name, surname, salary, experience, id }) {
  const manager = findOne(arr, id);
  manager.name = name || manager.name;
  manager.surname = surname || manager.surname;
  manager.experience = experience || manager.experience;
  manager.salary = salary || manager.salary;

  return [...arr];
}
export function updateProject(arr, { name, cost, linesCount, id }) {
  const project = findOne(arr, id);
  project.name = name || project.name;
  project.cost = cost || project.cost;
  project.linesCount = linesCount || project.linesCount;

  return [...arr];
}
export function findOne(arr, id) {
  return arr.find(({ id: Id }) => Id === id);
}
