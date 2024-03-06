import express from 'express';
import cors from 'cors';
import { getNews } from '../controller/news-controller.js';

const route = express.Router();


route.get('/news', cors() ,getNews);



export default route;