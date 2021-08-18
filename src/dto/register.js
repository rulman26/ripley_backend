const {checkSchema } = require('express-validator');

var registerDto = checkSchema({
    firstName: {
        isLength: {
            errorMessage: 'firstName incorrecto',
            options: { min: 1, max: 255},
        },
    },
    lastName: {
        isLength: {
            errorMessage: 'lastName incorrecto',
            options: { min: 1, max: 255},
        },
    },
    birthDate: {
        isLength: {
            errorMessage: 'birthDate incorrecto',
            options: { min: 10, max: 10},
        },
    }
})

module.exports = {
    registerDto
}