const express = require("express");
const bodyParser = require('body-parser');
const { swaggerUi, specs } = require('./swagger');
const app = express();

const port = process.env.PORT || 3000;
const mongodb = require('./data/database');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
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


