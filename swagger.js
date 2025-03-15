const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Contacts API',
            version: '1.0.0',
            description: 'API documentation for managing contacts',
        },
        servers: [
            {
              url: 'https://your-app-name.onrender.com', // Ensure this matches your Render domain
              description: 'Live server'
            },
            {
              url: 'http://localhost:3000',
              description: 'Local server'
            }
          ],
        paths: {
            "/contacts": {
                "get": {
                    "summary": "Get all contacts",
                    "description": "Retrieve a list of all contacts",
                    "responses": {
                        "200": {
                            "description": "A list of contacts"
                        }
                    }
                },
                "post": {
                    "summary": "Create a new contact",
                    "description": "Add a new contact to the database",
                    "requestBody": {
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "firstName": { "type": "string" },
                                        "lastName": { "type": "string" },
                                        "email": { "type": "string" },
                                        "favoriteColor": { "type": "string" },
                                        "birthday": { "type": "string", "format": "date" }
                                    }
                                }
                            }
                        }
                    },
                    "responses": {
                        "201": { "description": "Contact created successfully" }
                    }
                }
            },
            "/contacts/{id}": {
                "get": {
                    "summary": "Get a contact by ID",
                    "parameters": [
                        {
                            "in": "path",
                            "name": "id",
                            "required": true,
                            "schema": { "type": "string" }
                        }
                    ],
                    "responses": {
                        "200": { "description": "A contact object" },
                        "404": { "description": "Contact not found" }
                    }
                },
                "put": {
                    "summary": "Update a contact",
                    "parameters": [
                        {
                            "in": "path",
                            "name": "id",
                            "required": true,
                            "schema": { "type": "string" }
                        }
                    ],
                    "requestBody": {
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "firstName": { "type": "string" },
                                        "lastName": { "type": "string" },
                                        "email": { "type": "string" },
                                        "favoriteColor": { "type": "string" },
                                        "birthday": { "type": "string", "format": "date" }
                                    }
                                }
                            }
                        }
                    },
                    "responses": {
                        "200": { "description": "Contact updated successfully" }
                    }
                },
                "delete": {
                    "summary": "Delete a contact",
                    "parameters": [
                        {
                            "in": "path",
                            "name": "id",
                            "required": true,
                            "schema": { "type": "string" }
                        }
                    ],
                    "responses": {
                        "204": { "description": "Contact deleted successfully" },
                        "404": { "description": "Contact not found" }
                    }
                }
            }
        }
    },
    apis: [] // Remove annotation scanning
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };
