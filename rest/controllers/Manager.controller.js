const {managers} = require('../mocks/managers.mock');
const {Manager} = require('../models/Manager');
 
class ManagerController {
    findOne(name) {
        return managers.find(
            ({name: mName}) => mName === name
        );
    }

    findAll() {
        return managers;
    }

    create({name, surname, level, salary}) {
        const manager = new Manager(name, surname, level, salary);

        managers.push(manager);
    }

    updateOne(mName, {name, surname, salary}) {
        const manager = this.findOne(mName);

        manager.name = name || manager.name;
        manager.surname = surname || manager.surname;
        manager.salary = salary || manager.salary; 
    }

    deleteOne(name) {
        const index = managers.findIndex(m =>(m.name === name));
        managers.splice(index, 1);
    }
}

exports.managerController = new ManagerController();