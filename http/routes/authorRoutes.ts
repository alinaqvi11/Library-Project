import * as express from 'express'
const router = express.Router()
import AuthorController from '../controllers/authorController';

router.get('/author', AuthorController.getAuthor);
router.post('/author', AuthorController.createAuthor);
router.put('/author/:id', AuthorController.updateAuthor);
router.delete('/author/:id', AuthorController.removeAuthor);



export default router;