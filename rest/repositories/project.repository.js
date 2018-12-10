const {ProjectModel} = require('../db/models/project.model');

class ProjectRepository {
    async getAll() {
        return await ProjectModel.find();
    }
    
    async createOne(project) {
        return await ProjectModel.create(project);
    }

    async deleteOne(name) {
        return await ProjectModel.deleteOne({name});
    }

    async updateOne(name, project) {
        return await ProjectModel.updateOne({name}, project);
    }
}

exports.projectRepository = new ProjectRepository();