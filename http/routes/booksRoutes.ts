import express from 'express'
const router = express.Router()
import BookController from '../controllers/bookController';

router.get('/books',BookController.getBook);
// router.post('/books',BookController.getUser);



export default router;