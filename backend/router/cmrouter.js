const express = require('express')
const {
    getAllContacts, 
    getContact,
    createContact,
    updateContact,
    deleteContact} = require('../controller/cmcontroller')

const router = express.Router()
/*
router.get("/", (req, resp)=> {
    controller.getAllContacts(req, resp)
})

router.get("/:id", (req, resp)=> {
    controller.getContact(req, resp)
})

router.post("/", (req, resp)=> {
    controller.createContact(req, resp)
})

router.put("/:id", (req, resp)=> {
    controller.updateContact(req, resp)
})

router.delete("/:id", (req, resp)=> {
    controller.deleteContact(req, resp)
})*/

router.route("/").get(getAllContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);




module.exports = router