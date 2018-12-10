const {DevelopertModel} = require('../db/models/developer.model');

class DeveloperRepository {
    async getAll() {
        return await DevelopertModel
            .find();
    }
    
    async createOne(developer) {
        return await DevelopertModel.create(developer);
    }

    async deleteOne(name) {
        return await DevelopertModel.deleteOne({name});
    }

    async updateOne(name, developer){
        return await DevelopertModel.updateOne({name}, developer);
    }
}

exports.developerRepository = new DeveloperRepository();