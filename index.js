const express = require('express');
const getmusic = require('./routes/music');
const getmusician = require('./routes/musician');
const Db = require('./config/db');

const app = express();
app.use(express.json());
const PORT = 3000;
Db();

app.use('/api/v1/music', getmusic);
app.use('/api/v1/musician', getmusician);
app.listen(PORT, function (req, res) {
    console.log("listening @ PORT : " + PORT);
});