const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
server.use(express.json());

const Routes = require('./routes/Routes');
server.use('/estoque', Routes);

server.listen(3333, () => {
    console.log('API ONLINE');
});