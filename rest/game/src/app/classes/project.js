class Project{

    constructor({name, cost, linesCount}){
        this.name = name;
        this.cost = cost;
        this.linesCount = linesCount;
    }

    addDeveloper(developer) {
        this.developer = developer;
    }
}