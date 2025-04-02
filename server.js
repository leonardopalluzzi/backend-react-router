const express = require('express');
const app = express();
const port = 3000;
const generalRouter = require('./routes/postsRoute.js');
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use('/api/v1/social', generalRouter)

app.use(express.json())

app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);

})