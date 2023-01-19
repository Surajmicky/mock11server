const express = require('express');
const connect= require('./src/utils/db');
const signuprouter= require('./src/controllers/signup.controller');
const signinrouter= require('./src/controllers/signin.controller')
const app = express();

app.use(express.json());
app.use(signuprouter);
app.use(signinrouter);
app.listen(3000,()=>{
    connect()
    console.clear()
    console.log('listening on port 3000')
})