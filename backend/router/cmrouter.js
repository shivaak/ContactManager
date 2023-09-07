const express = require('express')
const controller = require('../controller/cmcontroller')

const router = express.Router()

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
})


module.exports = router