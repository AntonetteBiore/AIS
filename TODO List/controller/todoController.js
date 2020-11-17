const todoModel  =require('../models/todoModel');
module.exports= {
    getTodos: async(req, res)=>{
        try {
            const Todos = await todoModel.find();
            if (!Todos) return res.status(400).json({
                message: "Something went Wrong!"
            });
            res.render('index',{title: "TODO List", todos: Todos});
        } catch (error) {
            res.status(500).send(error)
        }
    
    },
    addTodos: async(req, res)=>{
        try {
            const newTodo = await new todoModel(req.body);
            const todo = await newTodo.save();
            if (!todo) return res.status(400).json({
                message: "Something went Wrong!"
            });
            res.redirect('/');
        } catch (error) {
            res.status(500).send(error)
        }
        
    },
    deleteTodos: async(req, res)=>{
        const id = req.params.id
        try {
            const todoById = await todoModel.findByIdAndDelete(id);
            if (!todoById) return res.status(400).json({
                message: "Something went Wrong!"
            });
            res.redirect('/')
        } catch (error) {
            res.status(500).send(error)
        }
    },
    updateTodos: async(req, res)=>{
        const id = req.params.id;
        const toUpdate = {
            title: req.body.title,
            task: req.body.task
        }
        try {
            const todoUpdate = await todoModel.findByIdAndUpdate(id,{$set: toUpdate});
            if(!todoUpdate) return res.status(400).json({
                message: "Something went Wrong!"
            });
            res.redirect('/');
        } catch (error) {
            res.status(500).send(error);
        }
    }

}