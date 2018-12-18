const {managerRepository} = require('../repositories/manager.repository')
 
class ManagerController {

    async findAll() {
        return await managerRepository.getAll();
    }

    async create(manager) {
        await managerRepository.createOne(manager);
    }

    async updateOne(id, manager) {
        await managerRepository.updateOne(id, manager);
    }

    async deleteOne(id) {
        await managerRepository.deleteOne(id);
    }
}

exports.managerController = new ManagerController();