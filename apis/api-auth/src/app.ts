import express, { Application } from 'express';
import cors from 'cors';
import * as OpenApiValidator from 'express-openapi-validator';
import {mainAllFunction} from "./router/main.router";
const bodyParser = require('body-parser')
const morgan = require('morgan')
const YAML = require('yamljs');
const swaggerUi = require('swagger-ui-express');
const { connector } = require('swagger-routes-express');

const app: Application = express();
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(
    morgan('dev', {
        skip: (req: Request) => req.url === '/api/ping'
    })
);
const swagger = YAML.load('./swagger/swagger.yaml');

const connect = connector({ ...mainAllFunction }, swagger);
const validator: any = OpenApiValidator.middleware({
    apiSpec: './swagger/swagger.yaml',
    validateRequests: true,
    validateResponses: false
});
app.use(validator);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swagger));
connect(app);

// Main Router
// app.use("/api",mainRouter);

export default app;
