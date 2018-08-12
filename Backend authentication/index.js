const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./router');

const app = express();

mongoose.connect('mongodb://localhost:27017/auth');

app.use(bodyParser.json({ type: '*/*'}));
router(app);

const port = process.env.PORT || 3030;

app.listen(port, () => {
    console.log(`Server is started on port ${port}`);
});