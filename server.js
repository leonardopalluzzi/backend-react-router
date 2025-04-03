const express = require('express');
const app = express();
const port = 3000;
const postsRouter = require('./routes/postsRoute.js');
const commentsRouter = require('./routes/commentsRoute.js');
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:5174'
}))

app.use(express.json())

app.use('/api/v1/social/', postsRouter)

app.use('/api/v1/comments', commentsRouter)

app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);

})