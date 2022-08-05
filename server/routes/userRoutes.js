import express from 'express';
import { signup, signin } from '../controllers/user.js';

const router = express.Router();

//http://localhost:5000/user/signup
router.post('/signup',signup);

//http://localhost:5000/user/signin
router.post('/signin',signin);

export default router;