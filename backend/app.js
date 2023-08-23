// Application
import express from 'express';
import { questionRoutes } from './routes/question-route.js';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());
app.use('/', questionRoutes);
// express is all about middlewares
const server = app.listen(1234, err=>{
    if(err){
        console.log('Server Crash ', err);
    }
    else{
        console.log('Server Up and Running ', server.address().port);
    }
})