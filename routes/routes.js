const express = require('express');
const routerRegisters = require('./instantRegisters.routes');
const routerApi = (app) => {
    const router = express.Router();
    app.use('/bioAppApi', router);
    router.use('/registers', routerRegisters);
};
module.exports = routerApi;
