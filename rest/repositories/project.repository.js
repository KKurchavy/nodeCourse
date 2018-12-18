const {ProjectModel} = require('../db/models/project.model');

class ProjectRepository {
    async getAll() {
        return await ProjectModel.find();
    }
    
    async createOne(project) {
        return await ProjectModel.create(project);
    }

    async deleteOne(_id) {
        return await ProjectModel.deleteOne({_id});
    }

    async updateOne(_id, project) {
        return await ProjectModel.updateOne({_id}, project);
    }
}

exports.projectRepository = new ProjectRepository();