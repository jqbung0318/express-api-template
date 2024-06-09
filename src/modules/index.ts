import { Router } from 'express';
import misc from './misc/misc.route';

const router = Router();

router.use('/', misc);

export default router;
