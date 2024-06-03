require('dotenv').config();

const express = require('express');
const app = express()
const http = require('http').createServer(app);

const PORT = 3000 || process.env.PORT

http.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`)
})