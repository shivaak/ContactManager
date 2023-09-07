
//@desc Get all contacts
//@route GET /api/contact
//@access public
const getAllContacts = (req, resp) => {
    resp.status(200).json({message : "get all contacts" })
}

//@desc Get a contact by ID
//@route GET /api/contact/:id
//@access public
const getContact = (req, resp) => {
    resp.status(200).json({message : "get contact!!!" })
}

//@desc Create new contact
//@route POST /api/contact
//@access public
const createContact = (req, resp) => {
    resp.status(201).json({message : "create contact!!!" })
}

//@desc Update contact
//@route PUT /api/contact/:id
//@access public
const updateContact = (req, resp) => {
    resp.status(200).json({message : "update contact!!!" })
}

//@desc Delete contact
//@route DELETE /api/contact/:id
//@access public
const deleteContact = (req, resp) => {
    resp.status(200).json({message : "delete contact!!!" })
}

module.exports = {
    getAllContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
}