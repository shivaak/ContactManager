const asyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")

const validateToken = asyncHandler(async(req, resp, next)=>{
    let token
    let authHeader = req.headers.authorization || req.headers.Authorization
    if(authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1]

        jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
            console.log(decoded)
        
            if(err){
                resp.status(401);
                throw new Error("User is not authorized")
            }
            req.user = decoded.user
           next()
        })
        
        if(!token){
            resp.status(401);
            throw new Error("User is not authorized")
        }
    } else{
        resp.status(401);
        throw new Error("User is not authorized")
    }

    
    
})

module.exports = validateToken