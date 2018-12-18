const {DevelopertModel} = require('../db/models/developer.model');

class DeveloperRepository {
    async getAll() {
        return await DevelopertModel
            .find();
    }
    
    async createOne(developer) {
        return await DevelopertModel.create(developer);
    }

    async deleteOne(_id) {
        return await DevelopertModel.deleteOne({_id});
    }

    async updateOne(_id, developer){
        return await DevelopertModel.updateOne({_id}, developer);
    }
}

exports.developerRepository = new DeveloperRepository();