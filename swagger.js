const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'API documentation generated using swagger-autogen',
  },
  host: process.env.RENDER_EXTERNAL_URL || 'localhost:3000', // Dynamically set
  schemes: ['https'], // Render uses HTTPS by default
};

const outputFile = './swagger-output.json'; // The output file
const endpointsFiles = ['./server.js']; // Replace with your main entry file

swaggerAutogen(outputFile, endpointsFiles, doc);
