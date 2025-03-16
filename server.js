const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');

const port = process.env.PORT || 3000;
const mongodb = require('./data/database');


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(bodyParser.json());
app.use('/', require('./routes'));


mongodb.initDb((err) => {
    if (err) {
        console.error("Failed to initialize database:", err);
        process.exit(1); // Exit the process if the database connection fails
    } else {
        app.listen(port, '0.0.0.0', () => {
            console.log(`Server is listening on port ${port}`);
        });
    }
});

