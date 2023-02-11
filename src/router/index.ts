import { Router } from "express";

const router = Router();

router.post('/registration');
router.post('/login');
router.post('/logout');
router.get('/refresh');
router.get('/users');

export { router }; 