const  express = require("express");
const userModel = require("./models/model");
const todoModel = require("./models/todo");

const psw = require("./services/index")

require("./config/index")


var app = express();
app.use(express.json());

app.post("/add_user",function(req,res,next){
    const data = req.body
    const user = new userModel(data);
    user.save();
    res.status(200).send(req.body.username)
})

app.get("/find_todo",function(req,res,next){
    todoModel.find({user:req.query.id},function(err,todo){
        if(todo.length>0){
           const  date = new Date()
           const data2 =  todo.filter((item)=>{
                    const ts =  parseInt(item.expire)
                    const  da = new Date(ts).getTime() 
                    return date.getTime() < da && item.status =="pending"
            })

            if(req.query.type == "trash"){

                const data2 =  todo.filter((item)=>{
                    const ts =  parseInt(item.expire)
                    const  da = new Date(ts).getTime() 
                    return date.getTime() < da && item.status =="trash"
            })
            }
            res.status(200).send(data2)
        }
        else{
            res.status(200).send([])
        }
}); 
})

app.get("/find_trash",function(req,res,next){
    todoModel.find({user:req.query.id},function(err,todo){
        if(todo.length>0){
           const  date = new Date()
           const data2 =  todo.filter((item)=>{
                    const ts =  parseInt(item.expire)
                    const  da = new Date(ts).getTime() 
                    return date.getTime() < da && item.status =="trash"
            })
            res.status(200).send(data2)
        }
        else{
            res.status(200).send([])
        }
}); 
})

app.get("/expire_trash",function(req,res,next){
    todoModel.find({user:req.query.id},function(err,todo){
        if(todo.length>0){
           const  date = new Date()
           const data2 =  todo.filter((item)=>{
                    const ts =  parseInt(item.expire)
                    const  da = new Date(ts).getTime() 
                    return date.getTime() > da 
            })
            res.status(200).send(data2)
        }
        else{
            res.status(200).send([])
        }
}); 
})



app.post("/add_todo",function(req,res,next){
    const data = req.body
    const todo = new todoModel(data);
    todo.save();
    res.status(200).send("todo inserted successfully")
})



app.post("/user_login",function(req,res,next){
    const data = req.body
    userModel.find({username:data.username,password:data.password},function(err,user){

            if(user.length>0){
                res.status(200).send(user[0].username)
            }
            else{
                res.status(400).send({"msg":"user not found"})
            }
    }); 
})


app.post("/todo_update",function(req,res,next){
    todoModel.findOne({_id: req.body.id}, function(err, todo) {
        if(!err) {
            if(!todo) {
                todo = new todoModel();
                todo.status = todo.status;
            }
            todo.status = req.body.type;
            todo.edit = req.body.edit;
            todo.save(function(err) {
                if(!err) {
                    res.status(200).send(todo)
                }
                else {
                    res.status(400).send("something wrong ")
                }
            });
        }
    });
})


app.get("/p",async  function(re,res){

    console.log(  await psw.psw_encrypt("ddfgfdg"))
    res.send( await psw.psw_encrypt("ddfgfdg"))

})

app.listen(8080,function(){


    console.log("working in port 8080" )
})