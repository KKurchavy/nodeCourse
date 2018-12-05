class Manager extends Worker {

    constructor({name, surname, experience, salary}){
        super(name, surname)

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
