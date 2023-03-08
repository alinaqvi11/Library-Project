import * as express from 'express';
const app = express();
app.use(express.json())


// import bookRoutes from '../http/routes/booksRoutes'
// app.use('/api',bookRoutes);

import authorRoutes from '../http/routes/authorRoutes'
app.use('/api',authorRoutes);

// import libraryRoutes from '../http/routes/libraryRoutes'
// app.use('/api',libraryRoutes);

export default app;