const {developers} = require('../mocks/developers.mock');
const {Developer} = require('../models/Developer');
 
class DeveloperController {
    findOne(name) {
        return developers.find(
            ({name: dName}) => dName === name
        );
    }

    findAll() {
        return developers;
    }

    create({name, surname, level, salary}) {
        const developer = new Developer(name, surname, level, salary);

        developers.push(developer);
    }

    updateOne(dName, {name, surname, level, salary}) {
        const developer = this.findOne(dName);
        
        developer.name = name || developer.name;
        developer.surname = surname || developer.surname;
        developer.level = level || developer.level;
        developer.salary = salary || developer.salary; 
    }

    deleteOne(name) {
        const index = developers.findIndex(d => (d.name === name));
        developers.splice(index, 1);
    }
}

exports.developerController = new DeveloperController();