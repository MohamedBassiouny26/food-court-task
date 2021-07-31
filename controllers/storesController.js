const StoreModel = require('../models/stores');


async function getStores(req, res) {
    try {
        const stores = await StoreModel.find();
        res.json({ message: "Stores Data Extracted", data: stores });

    } catch (err) {
        res.status(500).json({ message: 'Something went wrong', err })
    }
}
async function getStoreByID(req, res) {
    try {
        const { id } = req.params
        const store = await StoreModel.findById(id);
        if (data)
            res.json({ message: "Store Data Extracted", data: store });
        else
            res.status(400).json({ message: "Bad Request" })
    } catch (err) {

        res.status(500).json({ message: err.message });
    }
}
async function addStore(req, res) {
    try {
        const storeInstance = new StoreModel({
            ...req.body
        })
        const store = await storeInstance.save();
        res.status(201).json({ message: "Store Added Succefully", data: store });
    } catch (err) {
        console.log(err)
        if (err._message)
            res.status(400).json({ message: "Bad Request" });
        else
            res.status(500).json({ message: err.message });
    }
}
async function editStore(req, res) {
    try {
        const { id } = req.params
        const store = await StoreModel.findById(id);
        if (data)
            res.json({ message: "Store Data Extracted", data: store });
        else
            res.status(400).json({ message: "Bad Request" })
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getStores,
    getStoreByID,
    addStore,
    editStore
}