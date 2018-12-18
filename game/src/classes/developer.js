import Worker from './worker';

export default class Developer extends Worker{
    constructor({name, surname, level, salary, linesCount, _id}) {
        super(name, surname,  _id);

        this.level = level;
        this.salary = salary;
        this.linesCount = linesCount || this.getLinesCount();
    }

    getLinesCount() {
        switch(this.level) {
            case "junior" :
                return 2000;
            case "middle" :
                return 5000;
            case "senior" :
                return 10000;
            default :
                return 100;
        }
    }
}

