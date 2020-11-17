const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const path = require('path');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let Todos = [{title:"Ais",task:"todo list"}, {title:"PHP",task:"Connect to database"}];

require('./connection');

//import todo route
const todoRouter = require('./Router/todoRouter')
app.use(todoRouter)

app.listen(3000, ()=> console.log('listening in port 3000'));