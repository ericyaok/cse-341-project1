const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'API documentation generated using swagger-autogen',
  },
  host: process.env.BASE_URL || 'localhost:3000', // Use BASE_URL if defined
  schemes: process.env.RENDER ? ['https'] : ['http'], // Use HTTPS for Render
  basePath: '/',
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./server.js']; // Update this if needed

swaggerAutogen(outputFile, endpointsFiles, doc);