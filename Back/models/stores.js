let mongoose = require('mongoose');

let storeSchema = new mongoose.Schema({
    StoreID: { type: Number, required: true, unique: true },
    StoreName: { type: String, required: true },
    StoreDescription: { type: String, required: true },
    StoreLogo: { type: String, required: true }
})
const StoreModel = mongoose.model('Store', storeSchema);
module.exports = StoreModel;