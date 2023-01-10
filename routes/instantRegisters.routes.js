const express = require('express');
const Boom = require('@hapi/boom');
const RegisterService = require('../services/instantRegisters.service');
const registerRequest = new RegisterService();
const router = express.Router();

router.get('/all/:idMeter', async (req, res) => {
    const { idMeter } = req.params;
    const result = await registerRequest.all(idMeter);
    if (!result) {
        res.status(204).send();
    } else {
        res.send({
            message: `Here you can see all the readings from ${idMeter}: `,
            data: result,
        });
    }
});
router.get('/monthly', (req, res) => {
    res.status(400).send({
        output,
    });
});
module.exports = router;
