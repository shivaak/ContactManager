const express = require('express')
const {
    getAllUsers, 
    getUser,
    createUser,
    updateUser,
    deleteUser} = require('../controller/usercontroller')
const validateToken = require('../middleware/validateTokenHandler')

const router = express.Router()

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router