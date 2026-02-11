import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('ERP Backend System is Running! 🚀');
});

app.listen(PORT, () => {
  console.log(`Server ini berjalan di http://localhost:${PORT}`);
});