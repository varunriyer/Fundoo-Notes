import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Fundoo Notes API',
        version: '1.0.0',
        description: 'Simple CRUD Notes App with Auth using JWT',
    },
    servers: [{ url: 'http://localhost:8000' }],




    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
                description: 'Enter JWT token like: Bearer <token>',
            },
        },
    },
};

const options = {
    swaggerDefinition,
    apis: ['./routes/*.js'],
};

export default swaggerJSDoc(options);
