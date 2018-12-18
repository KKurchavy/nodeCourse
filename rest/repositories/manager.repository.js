const {ManagerModel} = require('../db/models/manager.model');

class ManagerRepository {
    async getAll() {
        return await ManagerModel.find();
    }
    
    async createOne(manager) {
        return await ManagerModel.create(manager);
    }

    async deleteOne(_id) {
        return await ManagerModel.deleteOne({_id});
    }

    async updateOne(_id, manager) {
        return await ManagerModel.updateOne({_id}, manager);
    }
}

exports.managerRepository = new ManagerRepository();