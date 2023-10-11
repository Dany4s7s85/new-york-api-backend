const express = require('express');
const app = express();
const cors = require('cors');
const apicall = require('./controler')

app.use(cors());

app.get('/task', apicall);

app.listen(4000, () => {
    console.log('server listening on port 4000');
});
