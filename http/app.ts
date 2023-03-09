import * as express from 'express';
const app = express();
app.use(express.json())


import bookRoutes from './routes/Books.Routes'
app.use('/api',bookRoutes);

import authorRoutes from './routes/Author.Routes'
app.use('/api',authorRoutes);

import libraryRoutes from './routes/Library.Routes'
app.use('/api',libraryRoutes);

export default app;