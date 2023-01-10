const connect = require('../libs/dbpostgres');
class RegisterService {
    constructor() {}
    async daily() {}
    async weekly() {}
    async monthly() {}
    async all(idMeter) {
        const client = await connect();
        const rta = await client.query(
            `SELECT meter_id as idmeter, meter_date as date, active_energy as register FROM registers WHERE meter_id = '${idMeter}'`
        );
        if (!rta.rows.length) {
            return false;
        } else {
            return rta.rows;
        }
    }
}

module.exports = RegisterService;
