import connect from "./database/mongoDB/connection";
import app from "./app";
import dotenv from 'dotenv';
//For env File
const ENV: string = process.env.NODE_ENV || 'dev';
dotenv.config({ path: `.env.${ENV}`});
const listEndpoints = require('express-list-endpoints')
const port = process.env.PORT || 8000;
const MONGO_URL: string | unknown = process.env.MONGO_URL;

app.listen(port, async () => {
    await connect(MONGO_URL as string);
    console.info(`Server is Fire at http://localhost:${port}`);
    console.table(listEndpoints(app))
});
