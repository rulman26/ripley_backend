require("dotenv").config();
const Database = require('../db/database')


const register = async (body) => {
    try {
        let response = {}
        const {firstName, lastName, birthDate} = body
        let database = new Database()
        let procedure = `sp_save_person('${firstName}','${lastName}','${birthDate}')`
        let query = await database.queryProcedure(procedure)
        if(query.status){
            response.code = 200
            response.data = query.data
        }else{
            response.code = 500
        }
        return response
    } catch (err) {
        console.log(err)
        return { code: 500 }
    }
}


const list = async () => {
    try {
        let response = {}
        let database = new Database()
        let procedure = `sp_list_persons()`
        let query = await database.queryProcedure(procedure)
        if(query.status){
            response.code = 200
            response.data = query.data
        }else{
            response.code = 500
        }
        return response
    } catch (err) {
        console.log(err)
        return { code: 500 }
    }
}


const average = async () => {
    try {
        let response = {}
        let database = new Database()
        let procedure = `sp_average_persons()`
        let query = await database.queryProcedure(procedure)
        if(query.status){
            response.code = 200
            response.data = query.data[0]
        }else{
            response.code = 500
        }
        return response
    } catch (err) {
        console.log(err)
        return { code: 500 }
    }
}

module.exports = {
    register,
    list,
    average
}


