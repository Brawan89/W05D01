const e = require("express")
const express = require("express")
const app = express()
const port = 3000

app.use(express.json())

//todo list:
//post 
const todo = 
[
   { id: 1 , taskName: "sleep", isComplated: true },
   { id: 2 , taskName: "write", isComplated: false },
   { id: 3 , taskName: "read",  isComplated:  false }
]


//Read
app.get("/todo" , (req , res) =>{
        res.status(200)
        res.json(todo)
    })

//read is completed
app.get("/todos" , (req , res) =>{
    const found = todo.find((element) =>{
        return element.isComplated === true;
    });
    if(found){
        res.status(200)
        res.json(found)
    }
    else{
        res.status(404)
        res.json("not found")
    }
})




// create -> add one todo
app.post("/create" , (req , res) =>{
     let newTodo =   
    {
        id: todo.length +1 ,
        taskName: req.body.taskName ,
        isComplated: false
    }
    todo.push(newTodo);
    res.status(201)
    res.json(todo)
})



//update
// update -> edit task name ...
app.put('/updateName' , (req , res)=>{
    let found = todo.find((e) =>{
        return e.id == req.query.id;
    })
    if (found) {
        let upName = {
            id: found.id,
            taskName: req.body.taskName,
            isComplated: false
        }
        let up = todo.indexOf(found)
        todo.splice(up , 1 , upName)
        res.status(200)
        res.json(todo)
    }
    else{
        res.status(404)
        res.json('not found')
    }
})


//.............

// update -> isCompleted...
app.put('/update' , (req , res)=>{
    let found = todo.find((e) =>{
        return e.id == req.query.id;
    })
    if (found) {
        let upComp = {
            id: found.id,
            taskName: found.taskName,
            isComplated: req.body.isComplated
        }
        let up = todo.indexOf(found)
        todo.splice(up , 1 , upComp)
        
        res.json(todo)
    }
    else{
        res.status(404)
        res.json('not found')
    }  
})


//..........

//delete ine by on 
app.delete('/delete',  (req, res)=> {
    const{id, taskName , isComplated} = req.body;
    todo.splice(1 ,1)
    res.json(todo)
});

//delete use id query
app.delete("/del" , (req , res) =>{
    let del = todo.find((e) => {
        return e.id == req.query.id;
      });
      if (del) {
        let dle = todo.indexOf(del);
        todo.splice(dle, 1);
        res.json(todo);
      } else {
        res.status(404);
        res.json("not found");
      }
    
})


//..........
app.listen(port, () =>{
    console.log(`run on port ${port}`);
})