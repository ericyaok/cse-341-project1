const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');

const port = process.env.PORT || 3000;
const mongodb = require('./data/database');


//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(bodyParser.json());
app.use('/', require('./routes'));


mongodb.initDb((err) => {
    if (err) {
        console.log(err)
    }
    else {
        app.listen(port, () => (console.log(`listening on port ${port}`)));
    }
});


