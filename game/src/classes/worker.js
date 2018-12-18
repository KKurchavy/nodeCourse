export default class Worker {
  constructor(name, surname, _id) {
    this.name = name;
    this.surname = surname;
    this.id = _id || this.getId();
  }

  getId() {
    return +new Date();
  }
}
