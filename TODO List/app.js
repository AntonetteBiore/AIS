const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const path = require('path');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let Todos = [{title:"Ais",task:"todo list"}, {title:"PHP",task:"Connect to database"}];

app.get("/",(req, res)=>{
    res.render('index',{title: "TODO List", todos: Todos});
});

app.post('/add',(req, res)=>{
    // console.log(req.body);
    Todos.push(req.body);
    res.redirect('/');
});

app.post('/delete',(req, res)=>{
    Todos.splice(req.body.id,1)
    res.redirect('/');
});

app.listen(3000, ()=> console.log('listening in port 3000'));