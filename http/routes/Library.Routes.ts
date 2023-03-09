import * as express from 'express'
const router = express.Router()
import LibraryController from '../controllers/Library.Controller';
import container from '../../src/infrastructure/DIContainer/container';
const libraryController = container.get<LibraryController>(LibraryController)
router.get('/library/:id',libraryController.getLibrary);
router.post('/library',libraryController.createLibrary);
router.put('/library/:id',libraryController.updateLibrary);
router.delete('/library/:id',libraryController.removeLibrary);

export default router;