const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Contacts Api',
        description: 'Conatcts Api'
    },
    host: 'https://cse-341-project1-n4qt.onrender.com',
    schemes: ['https']
}

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);