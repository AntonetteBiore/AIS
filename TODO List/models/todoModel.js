const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const todoListSchema = new Schema({
    title:{type:String , required: true},
    task:{type:String, required:true}
});

const todosModel =mongoose.model("todoList", todoListSchema);
module.exports = todosModel;
