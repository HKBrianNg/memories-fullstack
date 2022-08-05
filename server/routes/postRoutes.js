import express from 'express';
import { getPosts, getPost, createPost, updatePost, deletePost, likePost, getPostsBySearch,commentPost } from '../controllers/posts.js';
import auth from "../middleware/auth.js";

const router = express.Router();

//http://localhost:5000/posts/
router.get('/', getPosts);

//http://localhost:5000/posts/search
router.get('/search', getPostsBySearch);

//http://localhost:5000/posts/
router.post('/',auth,createPost);

//http://localhost:5000/posts/123
router.get('/:id',getPost);

//http://localhost:5000/posts/123
router.patch('/:id',auth,updatePost);

//http://localhost:5000/posts/123
router.delete('/:id',auth,deletePost);

//http://localhost:5000/posts/123/likePost
router.patch('/:id/likePost',auth,likePost);

//http://localhost:5000/posts/123/commentPost
router.post('/:id/commentPost',commentPost);

export default router;