import express, { Request, Response } from 'express';
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
	res.json(['home1', 'home2']);
});

export default router;