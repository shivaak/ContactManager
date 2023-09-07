const {constants} = require('../constants')

const errorHandler = (err, req, resp, next) => {
    const statusCode = resp.statusCode ? resp.statusCode : 500
    switch(statusCode){
        case constants.VALIDATION_ERROR :
            resp.status(statusCode).json({
                title: "Validation failed",
                message: err.message,
                stackTrace: err.stack
            })
        break
        case constants.NOT_FOUND :
            resp.status(statusCode).json({
                title: "Not Found",
                message: err.message,
                stackTrace: err.stack
            })
        break
        case constants.UNAUTHORIZED :
            resp.status(statusCode).json({
                title: "UnAuthorized",
                message: err.message,
                stackTrace: err.stack
            })
        break
        case constants.FORBIDDEN :
            resp.status(statusCode).json({
                title: "Forbidden",
                message: err.message,
                stackTrace: err.stack
            })
        break
        case constants.SERVER_ERROR :
            resp.status(statusCode).json({
                title: "Server Error",
                message: err.message,
                stackTrace: err.stack
            })
        break
        default:
            console.log(`Unknown error : ${err}`)
            resp.json({
                title: "Server Error",
                message: err.message,
                stackTrace: err.stack,
            });
        break

    }
    
}

module.exports = errorHandler