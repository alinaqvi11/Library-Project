import * as express from 'express'
const router = express.Router()
import AuthorController from '../controllers/Author.Controller';
import container from '../../src/infrastructure/DIContainer/container';
const authorController = container.get<AuthorController>(AuthorController);

router.get('/author/:id', authorController.getAuthor);
router.post('/author', authorController.createAuthor);
router.put('/author/:id', authorController.updateAuthor);
router.delete('/author/:id', authorController.removeAuthor);



export default router;