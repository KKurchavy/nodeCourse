const {Worker} = require('../models/Worker');

class Manager extends Worker {

    constructor(name, surname, experience, salary){
        super(name, surname)
        this.salary = salary;
        this.experience = experience;
    }

}

exports.Manager = Manager;