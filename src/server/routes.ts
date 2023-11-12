import { Router } from 'express';
import * as mainController from './controllers/main.controller'

const router = Router();

router.get('/', mainController.index)

export default router;
