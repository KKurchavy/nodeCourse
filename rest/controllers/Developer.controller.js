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

    async deleteOne(name) {
        await developerRepository.deleteOne(name);
    }
}

exports.developerController = new DeveloperController();