const express = require('express');
const storeRouter = express.Router();
const storeController = require('../controllers/storesController')

storeRouter.get('/', storeController.getStores);
storeRouter.get('/:id', storeController.getStoreByID);
storeRouter.post('/add_store', storeController.addStore);
storeRouter.patch('/edit_store/:id', storeController.editStore);



module.exports = storeRouter;