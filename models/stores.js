let mongoose = require('mongoose');

let storeSchema = new mongoose.Schema({
    storeID: { type: Number, required: true, unique: true },
    storeName: { type: String, required: true },
    storeDescription: { type: String, required: true },
    storeLogo: { type: String, required: true }
})
const StoreModel = mongoose.model('Store', storeSchema);
module.exports = StoreModel;