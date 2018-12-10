const {managerRepository} = require('../repositories/manager.repository')
 
class ManagerController {

    async findAll() {
        return await managerRepository.getAll();
    }

    async create(manager) {
        await managerRepository.createOne(manager);
    }

    async updateOne(mName, manager) {
        await managerRepository.updateOne(mName, manager);
    }

    async deleteOne(name) {
        await managerRepository.deleteOne(name);
    }
}

exports.managerController = new ManagerController();