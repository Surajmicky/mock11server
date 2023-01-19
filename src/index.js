const express = require('express');
const connect= require('./utils/db');
const signuprouter= require('./controllers/signup.controller');
const signinrouter= require('./controllers/signin.controller')
const app = express();

app.use(express.json());
app.use(signuprouter);
app.use(signinrouter);
app.listen(3000,()=>{
    connect()
    console.clear()
    console.log('listening on port 3000')
})