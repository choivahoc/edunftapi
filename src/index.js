/*
 * Run the project and access the documentation at: http://localhost:8050/doc
 *
 * Use the command below to generate the documentation without starting the project:
 * $ npm start
 *
 * Use the command below to generate the documentation at project startup:
 * $ npm run start-gendoc
 */

import swaggerUi from 'swagger-ui-express';
import { readFile } from 'fs/promises';
const swaggerFile = JSON.parse(
    await readFile(
        new URL('../swagger-output.json', import.meta.url)
    )
);

import express from 'express';
const app = express();

import bodyParser from 'body-parser';
app.use(bodyParser.json());

/* Routes */
import router from './routes.js';
import cors from "cors";

/* Middlewares */
app.use(cors({
    origin: '*',
    // methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));
app.use(router);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(8050, () => {
  console.log("Server is running!\nAPI documentation: http://localhost:8050/docs");
})
