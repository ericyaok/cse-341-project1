
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

module.exports = {
    getAll,
    getSingle
};
