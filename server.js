const express = require("express");
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 3000;
const mongodb = require('./data/database');



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


