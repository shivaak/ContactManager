const Contact = require("../model/contact")

//@desc Get all contacts
//@route GET /api/contact
//@access public
const getAllContacts =  async (req, resp, next) => {
    Contact
        .find()
        .then(contacts => {
            resp.status(200).json(contacts)
        }).catch(next)
}

//@desc Get a contact by ID
//@route GET /api/contact/:id
//@access public
const getContact = async (req, resp, next) => {
    Contact
        .findById(req.params.id)
        .then ( contact => {
            if (!contact) {
                resp.status(404);
                throw new Error("Contact not found");
            }
            resp.status(200).json(contact);
        })
    .catch(next); // error passed on to the error handling route
}

//@desc Create New contact
//@route POST /api/contacts
//@access private
const createContact = async (req, resp, next) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      resp.status(400);
      throw new Error("All fields are mandatory !");
    }
   Contact.create({
      name,
      email,
      phone
    }).then(contact=>{
        resp.status(201).json(contact);
    }).catch(next);
  };

//@desc Update contact
//@route PUT /api/contact/:id
//@access public
const updateContact = async (req, resp, next) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      resp.status(400);
      throw new Error("All fields are mandatory !");
    }

    Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new:true
        }
    ).then(updatedContact => {
        if (!updatedContact) {
            resp.status(404);
            throw new Error("Contact not found");
        }
        resp.status(200).json(updatedContact)
    }).catch(next)
    
}

//@desc Delete contact
//@route DELETE /api/contact/:id
//@access public
const deleteContact = async (req, resp, next) => {
    Contact
        .findByIdAndDelete(req.params.id)
        .then(success => {
            if(!success){
                resp.status(404)
                throw new Error("Contact not found")
            }
            resp.status(200).json({message : "Contact deleted" })
        }).catch(next)
}

module.exports = {
    getAllContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
}