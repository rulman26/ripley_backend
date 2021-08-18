require('dotenv').config();
const mysql = require('promise-mysql')
const {DB_HOST, DB_DATABASE, DB_USER, DB_PASSWORD} = process.env
class Database {
    constructor() {
    }

    getDbConnection = async () => {
        return await mysql.createConnection({
            host: DB_HOST,
            user: DB_USER,
            password: DB_PASSWORD,
            database: DB_DATABASE
        })
    }

    queryProcedure = async (procedure) => {
        try {
            let query = `CALL ${procedure}`
            const db = await this.getDbConnection()
            const data = await db.query(query)
            let result = JSON.parse(JSON.stringify(data[0]));
            await db.end()
            return {'status':true, 'data': result}
        } catch (error) {
            return {'status':false, 'data': error}
        }
    }
}

module.exports = Database