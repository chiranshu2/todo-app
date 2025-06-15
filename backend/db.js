const mongoose=require("mongoose")


mongoose.connect("mongodb+srv://admin:bwEYzXLJtlj9QUhC@todo.eojshua.mongodb.net/todos")
const todoSchema=mongoose.Schema({  
    id:Number,
    title:String,
    description: String,
  completed: {
        type: Boolean,      
        default: false
    }
})
const todo=mongoose.model('todos',todoSchema)
module.exports={
    todo 
}
