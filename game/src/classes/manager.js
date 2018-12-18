import Worker from './worker';

export default class Manager extends Worker {

    constructor({name, surname, experience, salary, _id}){
        super(name, surname, _id)

        this.salary = salary;
        this.experience = experience;
    }

    getProject(list) {
        this.project = list.pop();
    }

    selectDeveloperForProject(devsList) {
        this.project.addDeveloper(devsList.pop());
    }

    addLinesForProject() {
        this.project.linesCount -= this.project.developer.linesCount * this.experience;
    }
}
