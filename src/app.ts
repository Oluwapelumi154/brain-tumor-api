import express from 'express'
import {Response,Request} from "express"
import route from './gateway';
import { errorResponseMsg } from './utils/response';
import cors from 'cors';
import morgan from 'morgan'

const app= express();
app.use('/api',route);
app.use(cors);
app.use(morgan('dev'));
app.use(express.json());
app.use('*',(req: Request,res: Response)=> errorResponseMsg(res,"fail",200,`can't ${req.originalUrl} on this server`));
export default app;