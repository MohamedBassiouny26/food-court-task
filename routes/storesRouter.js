const express = require('express');
const storeRouter = express.Router();
const storeController = require('../controllers/storesController')

storeRouter.get('/', storeController.getStores);
storeRouter.get('/:id', storeController.getStoreByID);



module.exports = storeRouter;