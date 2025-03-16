const router = require('express').Router();

router.use('/api-docs', require('./swagger.js'));

router.get('/', (req, res) => { res.send("Hello World"); });

router.use('/contacts', require('./contacts.js'));

module.exports = router;