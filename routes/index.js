const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');


router.get('/', (req, res) => { res.send("Hello World"); });

router.use('/contacts', require('./contacts.js'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

module.exports = router;