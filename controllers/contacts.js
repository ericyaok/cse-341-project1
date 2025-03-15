
const { getDatabase } = require('../data/database'); // Correct import
const { ObjectId } = require('mongodb'); // Destructure ObjectId

const getAll = async (req, res) => {
    try {
        const db = getDatabase();
        const result = await db.collection('contacts').find().toArray(); // Convert cursor to array
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving contacts' });
    }
};

const getSingle = async (req, res) => {
    try {
        const id = req.params.id;

        // Validate if ID is a valid ObjectId
        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'this is for getting single' });
        }

        //const contactId = new ObjectId(id);
        const contactId = ObjectId.createFromHexString(id);
        // const contactId = ObjectId(id);
        console.log({ _id: contactId });


        const db = getDatabase();
        const result = await db.collection('contacts').findOne({ _id: contactId });


        if (!result) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving contact' });
    }
};


const createContact = async (req, res) => {
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    }
    const db = getDatabase();
    const response = await db.collection('contacts').insertOne(contact);
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some errors occured while creating the contact')
    }
};

const updateContact = async (req, res) => {
    const contactId = ObjectId.createFromHexString(req.params.id);
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    }
    const db = getDatabase();
    const response = await db.collection('contacts').replaceOne({ _id: contactId }, contact);
    if (response.modifiedCount > 1) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some errors occured while updating the contact')
    }
};

const deleteContact = async (req, res) => {
    const contactId = ObjectId.createFromHexString(req.params.id);
    const db = getDatabase();
    const response = db.collection('contacts').deleteOne({ _id: contactId }, true)
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.erroe || 'Some errors while deleting contact')
    }

};


module.exports = {
    getAll,
    getSingle,
    createContact,
    updateContact,
    deleteContact
};
