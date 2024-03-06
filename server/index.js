import express from 'express';
import dotenv from 'dotenv'

import Connection from './connection/db.js';
import DefaultData from './default.js';

import bodyParser from 'body-parser';
import Route from './routes/route.js';


const app = express();
dotenv.config();

app.use('/',Route);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));


const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const port = process.env.PORT;

Connection(username, password);

app.listen(port, () => console.log(`Server is running successfully on PORT ${port}`));

DefaultData();
