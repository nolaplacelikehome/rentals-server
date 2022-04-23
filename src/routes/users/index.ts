import express, { Request, Response } from 'express';
const router = express.Router();
import userController from '../../controllers/userController';

router.get('/', (req: Request, res: Response) => {
	res.json(['home1', 'home2']);
});

router.get('/create', userController.user_create_get);

export default router;