const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'API documentation generated using swagger-autogen',
  },
  host: '', // Leave blank; Express will handle the correct host
  schemes: process.env.RENDER ? ['https'] : ['http'], // Use HTTPS for Render
  basePath: '/',
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./server.js']; // Update this if needed

swaggerAutogen(outputFile, endpointsFiles, doc);
