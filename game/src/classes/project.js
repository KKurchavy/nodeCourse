export default class Project {
  constructor({ name, cost, linesCount, _id }) {
    this.name = name;
    this.cost = cost;
    this.linesCount = linesCount;
    this.id = _id || this.getId();
  }

  addDeveloper(developer) {
    this.developer = developer;
  }

  getId() {
    return +new Date();
  }
}
