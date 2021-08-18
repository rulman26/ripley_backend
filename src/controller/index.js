const express = require('express')
const router = express.Router()
const { validationResult } = require('express-validator')
const service = require('../service/index')
const { registerDto } = require('../dto/register')

router.post('/register', registerDto, async (req,res)=>{
    try {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        let data = await service.register(req.body)
        res.status(data.code).send(data.data)
    } catch (err) {
        console.log(err)
        return { code: 500}
    }
})

router.get('/list', async (req,res)=>{
    try {
        let data = await service.list()
        res.status(data.code).send(data.data)
    } catch (err) {
        console.log(err)
        return { code: 500}
    }
})

router.get('/average', async (req,res)=>{
    try {
        let data = await service.average()
        res.status(data.code).send(data.data)
    } catch (err) {
        console.log(err)
        return { code: 500}
    }
})


module.exports = router