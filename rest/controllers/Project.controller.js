const {projectRepository} = require('../repositories/project.repository')
 
class ProjectController {

    async findAll() {
        return await projectRepository.getAll();
    }

    async create(project) {
        await projectRepository.createOne(project);
    }

    async updateOne(id, project) {
        await projectRepository.updateOne(id, project);
    }

    async deleteOne(id) {
        await projectRepository.deleteOne(id);
    }
}

exports.projectController = new ProjectController();