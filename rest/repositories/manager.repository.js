const {ManagerModel} = require('../db/models/manager.model');

class ManagerRepository {
    async getAll() {
        return await ManagerModel.find();
    }
    
    async createOne(manager) {
        return await ManagerModel.create(manager);
    }

    async deleteOne(name) {
        return await ManagerModel.deleteOne({name});
    }

    async updateOne(name, manager) {
        return await ManagerModel.updateOne({name}, manager);
    }
}

exports.managerRepository = new ManagerRepository();