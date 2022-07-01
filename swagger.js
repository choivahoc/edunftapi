import SwaggerAutogen from 'swagger-autogen';
const swaggerAutogen = new SwaggerAutogen();

const doc = {
    info: {
        version: "1.0.0",
        title: "EduNFT API",
        description: "Documentation automatically generated by the <b>swagger-autogen</b> module."
    },
    host: "localhost:3000",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "Token",
            "description": "Token APIs"
        },
        {
            "name": "Image",
            "description": "Image APIs"
        }
    ],
    securityDefinitions: {
        apiKeyAuth: {
            type: "apiKey",
            in: "header",       // can be "header", "query" or "cookie"
            name: "X-API-KEY",  // name of the header, query parameter or cookie
            description: "any description..."
        }
    },
    definitions: {
        Mint: {
            $token_id: "token_nft",
            $owner: "aura1mmsenr5nejugxqv6jtetlckwjhsmft7f8dqud4",
            $token_uri: 'ANFT',
            $extension: {}
        },
        Transfer: {
            $token_id: "token_nft",
            $recipient: "aura1n9dk7hvqtqrpxuc52w9qsmd95dm83ccjum2636"
        }
    }
}

const outputFile = './swagger-output.json'
const endpointsFiles = ['./src/index.js']

export default swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
    await import('./src/index.js');         
})