const User = require("../model/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

//@desc Login user
//@route POST /api/user/login
//@access public
const login =  async (req, resp, next) => {
    const {email, password } = req.body
    if (!email || !password) {
        resp.status(400);
        return next(new Error("Both email and password are mandatory !"))
    }
    
    //Check if email id and pwd are valid
    User.findOne({email})
        .then(async (user)=> {
            if(user && await bcrypt.compare(password, user.password)){
                //jwt.io for the format of token
                const accessToken = jwt.sign({
                    user:{
                        username: user.username,
                        email: user.email,
                        id : user.id

                    }
                }, 
                process.env.ACCESS_TOKEN,  
                {expiresIn: "15m"})

                resp.status(200).json({accessToken})
            }else{
                resp.status(401);
                throw new Error("User email or password invalid");
            }
        })
        .catch(next)
}

//@desc Get current login user info
//@route GET /api/user/login
//@access private
const getCurrentLoggedInUser =  async (req, resp, next) => {
    resp.send(req.user)
}

//@desc Get all users
//@route GET /api/user
//@access public
const getAllUsers =  async (req, resp, next) => {
    console.log("get all users")
    User
        .find()
        .then(users => {
            resp.status(200).json(users)
        }).catch(next)
}

//@desc Get a user by ID
//@route GET /api/user/:id
//@access public
const getUser = async (req, resp, next) => {
    console.log("get user")
    User
        .findById(req.params.id)
        .then ( user => {
            if (!user) {
                resp.status(404);
                throw new Error("User not found");
            }
            resp.status(200).json(user);
        })
    .catch(next); // error passed on to the error handling route
}

//@desc Create New user
//@route POST /api/users
//@access public
const createUser = async (req, resp, next) => {
    console.log('create user')
    const { username, email, password } = req.body;
    if (!username || !password || !email) {
      resp.status(400);
      return next(new Error("All fields are mandatory !"))
    }

    //Check if email id is already registered
    User.findOne({email})
        .then(user=>{
            if(user){
                resp.status(400);
                throw new Error("User email already registered");
            }
        })
        .catch(next)

    //Register user. Use bcrypt library to hash the password 
    const hashedPwd = await bcrypt.hash(password, 10)
    console.log(email,hashedPwd, username)
    User.create({
        username,
        email,
        password : hashedPwd
    }).then(user=>{
        resp.status(201).json({
            "_id": user.id,
            "email": user.email
        });
    }).catch(next);
};

//@desc Update user
//@route PUT /api/user/:id
//@access public
const updateUser = async (req, resp, next) => {
    const { username, email, password } = req.body;
    if (!username || !password || !email) {
      resp.status(400);
      return next(new Error("All fields are mandatory !"))
    }

    User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new:true
        }
    ).then(updatedUser => {
        if (!updatedUser) {
            resp.status(404);
            throw new Error("User not found");
        }
        resp.status(200).json(updatedUser)
    }).catch(next)
    
}

//@desc Delete user
//@route DELETE /api/user/:id
//@access public
const deleteUser = async (req, resp, next) => {
    User
        .findByIdAndDelete(req.params.id)
        .then(success => {
            if(!success){
                resp.status(404)
                throw new Error("User not found")
            }
            resp.status(200).json({message : "User deleted" })
        }).catch(next)
}

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    login,
    getCurrentLoggedInUser
}