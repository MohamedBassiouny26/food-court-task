let mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator')
let storeSchema = new mongoose.Schema({
    StoreID: { type: Number, required: true, unique: true },
    StoreName: { type: String, required: true },
    StoreDescription: { type: String, required: true },
    StoreLogo: { type: String, required: true }
})

storeSchema.plugin(uniqueValidator);
const StoreModel = mongoose.model('Store', storeSchema);
module.exports = StoreModel;