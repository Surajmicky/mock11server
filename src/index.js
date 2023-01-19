const express = require('express');
const connect= require('./utils/db');

const app = express();

app.use(express.json());

app.listen(3000,()=>{
    connect()
    console.clear()
    console.log('listening on port 3000')
})