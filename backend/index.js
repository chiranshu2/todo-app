const express=require("express")
const app=express()
const {createTodo, updateTodo}= require("./types")
const { todo }=require("./db")
app.use(express.json())
const cors=require("cors")
app.use(cors())

app.post('/todo',async function(req,res){
const createPayload=req.body
const parsedPayload = createTodo.safeParse(createPayload)
if(!parsedPayload.success){
    res.status(411).json({ 
        msg:"you sent the wrong inputs"
    })
    return;

}
//puut it in mongo
await todo.create(
    {
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    }
)

res.json({
    msg:"todo created"
})
})
app.get('/todos',async function(req,res){
    const todos=await todo.find({})
    res.json({
        todos
    })
})
app.put("/completed",async function(req,res){
const updatePayload=req.body
const parsedPayload=updateTodo.safeParse(updatePayload)

if(!parsedPayload.success){
    res.status(411).json({
        msg:"You sent the wrong inputs"
    })
    return;
}
await todo.update(
    {
        _id:req.body.id
    },{
    completed:True
})
res.json({
    msg:"todo mark as completed"
})

})

app.listen(3000, () => {
	console.log("Server running...");
});