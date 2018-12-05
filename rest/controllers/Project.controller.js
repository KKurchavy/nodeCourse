const {projects} = require('../mocks/projects.mock');
const {Project} = require('../models/Project');
 
class ProjectController {
    findOne(name) {
        return projects.find(
            ({name: pName}) => pName === name
        );
    }

    findAll() {
        return projects;
    }

    create({name, cost, linesCount}) {
        const project = new Project(name, cost, linesCount);

        projects.push(project);
    }

    updateOne(pName, {name, cost, linesCount}) {
        const project = this.findOne(pName);

        project.name = name || project.name;
        project.cost = cost || project.cost;
        project.linesCount = linesCount || project.linesCount;
    }

    deleteOne(name) {
        const index = projects.findIndex(p =>(p.name === name));
        projects.splice(index, 1);

    }
}

exports.projectController = new ProjectController();