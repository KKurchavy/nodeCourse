export default (entities, addMoney, getSalary, removeProject) => {
  let TIMER_ID;
  const TICK_TIME = 2000;

  let UNOCCUPIED_PROJECTS;
  let UNOCCUPIED_DEVELOPERS;
  let UNOCCUPIED_MANAGERS;

  let WORKING_MANAGERS = [];

  return {
    start() {
      getWorkers();
      if (toWork()) {
        TIMER_ID = setInterval(run, TICK_TIME);
      }
    },

    stop() {
      clearTimeout(TIMER_ID);
    }
  };

  function run() {
    UNOCCUPIED_DEVELOPERS.forEach(dev => {
      getSalary(dev.salary);
    });
    WORKING_MANAGERS.forEach(manager => {
      getSalary(manager.salary);
      getSalary(manager.project.developer.salary);
      manager.addLinesForProject();

      if (manager.project.linesCount < 0) {
        UNOCCUPIED_DEVELOPERS.push(manager.project.developer);
        UNOCCUPIED_MANAGERS.push(remove(WORKING_MANAGERS, manager));
        addMoney(manager.project.cost);
        removeProject(manager.project.id);
        remove(entities.projects, manager.project);
        toWork();
      }
    });
  }

  function toWork() {
    if (!UNOCCUPIED_MANAGERS.length || !UNOCCUPIED_DEVELOPERS.length) {
      alert("необходимо нанять минимум одного пр-та и менеджера");
      return;
    }

    UNOCCUPIED_MANAGERS.forEach(manager => {
      if (UNOCCUPIED_PROJECTS.length) {
        manager.getProject(UNOCCUPIED_PROJECTS);
        manager.selectDeveloperForProject(UNOCCUPIED_DEVELOPERS);
        WORKING_MANAGERS.push(remove(UNOCCUPIED_MANAGERS, manager));
      } else {
        clearTimeout(TIMER_ID);
        alert("Невероятно, на данный момент проектов нет :(");
        return;
      }
    });

    return true;
  }

  function getWorkers() {
    UNOCCUPIED_PROJECTS = copy(entities.projects);
    UNOCCUPIED_DEVELOPERS = copy(entities.workers.developers);
    UNOCCUPIED_MANAGERS = copy(entities.workers.managers);
  }

  function copy(arr) {
    return arr.slice();
  }

  function remove(arr, item) {
    const index = arr.findIndex(element => element === item);
    if (index >= 0) {
      return arr.splice(index, 1)[0];
    }
  }
};
