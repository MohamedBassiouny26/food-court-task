const StoreModel = require('../models/stores');


async function getStores(req, res) {
    const stores = await StoreModel.find();
    res.json({ stores });
}
async function getStoreByID(req, res) {
    const { id } = req.params
    const store = await StoreModel.findById(id);
    res.json({ store });
}
async function addStore(req, res) {
    const { id } = req.params
    const store = await StoreModel.findById(id);
    res.json({ store });
}


module.exports = {
    getStores,
    getStoreByID
}