const express = require('express');
const storeRouter = express.Router();
const storeController = require('../controllers/storesController')

storeRouter.get('/', storeController.getStores);
storeRouter.get('/search', storeController.searchByName);
storeRouter.get('/:id', storeController.getStoreByID);
storeRouter.post('/add_store', storeController.addStore);
storeRouter.patch('/:id', storeController.editStore);
storeRouter.delete('/:id', storeController.deleteStore);



module.exports = storeRouter;