const {projectRepository} = require('../repositories/project.repository')
 
class ProjectController {

    async findAll() {
        return await projectRepository.getAll();
    }

    async create(project) {
        await projectRepository.createOne(project);
    }

    async updateOne(pName, project) {
        await projectRepository.updateOne(pName, project);
    }

    async deleteOne(name) {
        await projectRepository.deleteOne(name);
    }
}

exports.projectController = new ProjectController();