import * as express from 'express'
const router = express.Router()
import BookController from '../controllers/Book.Controller';
import container from '../../src/infrastructure/DIContainer/container';
const bookController = container.get<BookController>(BookController)

router.get('/book',bookController.getBook);
router.post('/book',bookController.createBook);
router.put('/book/:id',bookController.updateBook);
router.delete('/book/:id', bookController.removeBook)



export default router;