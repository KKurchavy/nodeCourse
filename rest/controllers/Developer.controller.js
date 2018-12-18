const {developerRepository} = require('../repositories/developer.repository');
 
class DeveloperController {

    async findAll() {
        return await developerRepository.getAll();
    }

    async create(developer) {
        await developerRepository.createOne(developer);
    }

    async updateOne(dName, developer) {
        await developerRepository.updateOne(dName, developer);
    }

    async deleteOne(id) {
        await developerRepository.deleteOne(id);
    }
}

exports.developerController = new DeveloperController();