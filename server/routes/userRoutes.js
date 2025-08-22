import express from 'express'
import { auth }from '../middlewares/auth.js'
import { getPublishedCerations, getUserCreations, toggleLikeCreation } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.get('/get-user-creations', auth, getUserCreations);
userRouter.get('/get-published-creations', auth, getPublishedCerations);
userRouter.post('/toggle-like-creation', auth, toggleLikeCreation);

export default userRouter;