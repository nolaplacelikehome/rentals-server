import express, { Request, Response } from 'express';
import homesRouter from './homes';
import userRouter from './users';
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
	res.send("Hello world");
});

router.use('/user', userRouter);
router.use('/homes', homesRouter);

export default router;