class Developer extends Worker{
    constructor({name, surname, level, salary, linesCount}) {
        super(name, surname);

        this.level = level;
        this.salary = salary;
        this.linesCount = linesCount;
    }
}

