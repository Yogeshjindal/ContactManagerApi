const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
//@describe get all contacts  // route GET /api/contacts  // access private
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user.id });
  res.status(200).json(contacts);
});

//@describe create a contact  // route POST /api/contacts  // access private
const createContact = asyncHandler(async (req, res) => {
  console.log(`the body is ${req.body}`);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).json({ message: "Please enter all fields" });
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
    user_id: req.user.id,
  });
  res.status(201).json(contact);
});

//@describe get a contact  // route GET /api/contacts/:id  // access private
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not Found");
  }
  res.status(200).json(contact);
});

//@describe update a contact    // route PUT /api/contacts/:id    // access private
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not Found");
  }
  if (contact.user.user_id.toString() !== req.user.user_id) {
    res.status(403);
    throw new Error("You can only update your own contact");
  }
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedContact);
});

//@describe delete a contact    // route DELETE /api/contacts/:id   // access private
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not Found");
  }
  if (contact.user.user_id.toString() !== req.user.user_id) {
    res.status(403);
    throw new Error("You can only update your own contact");
  }
  await Contact.deleteOne({ _id: req.params.id });
  res.status(200).json(contact);
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
