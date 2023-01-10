const { Client } = require('pg');
require('dotenv').config();
const options = {
    host: process.env.HOSTDB,
    port: process.env.PORTDB,
    user: process.env.USERDB,
    password: process.env.PASSDB,
    database: process.env.DATABASE,
};

const connect = async () => {
    const cliente = new Client(options);
    await cliente.connect();
    return cliente;
};

module.exports = connect;