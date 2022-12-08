import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import router from './routes';

dotenv.config();

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({extended: true}));

app.use(router);

app.use((req: Request, res: Response) => {
    res.status(404);
    res.json({error: 'Endpoint não encontrado.'});
});

app.listen(process.env.PORT);