import { Router, Request, Response } from 'express';
const router: Router = Router();

// Version
router.get('/', (req: Request, res: Response) => {
  res.json({ version: '1.0.0' });
});

// Healthcheck
router.get('/healthcheck', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Server is running' });
});

export default router;
