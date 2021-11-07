const express = require("express")
const app = express()
const port = 5000

app.use(express.json())

//todo list:
//post 
const todo = 
[
   { id: 1 , taskName: "sleep", isComplated: false },
   { id: 2 , taskName: "write", isComplated: false },
   { id: 3 , taskName: "read",  isComplated:  false }
]


//Read
app.get("/todo" , (req , res) =>{
        res.status(200)
        res.json(todo)
    })

//read special item...
app.get("/todo" , (req , res) =>{
    const{taskName} = req.query;
    const found = todo.find((element) =>{
        return element.taskName === taskName;
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



//create -> add one todo..
app.post("/create" , (req , res) =>{
    res.send("post Request Called")
    const{id , taskName , isComplated} = req.body
    todo.push({id: 6, taskName: "sport" , isComplated: true})
    res.status(201)
    res.json({id, taskName , isComplated})
})

// create -> without
app.post("/create" , (req , res) =>{
    const{id , taskName , isComplated} = req.body
    todo.push({id , taskName , isComplated})
    res.status(201)
    res.json({id, taskName , isComplated})
})


//update
// update -> isCompleted... or not
app.put('/update' , (req , res)=>{
    const{isComplated} = req.body;
    todo.forEach((element) =>{
     element.isComplated = isComplated;
      
    })
    res.status(200)
    res.json(todo);
})

// update -> edit task name ...
app.put('/updateName' , (req , res)=>{
    const{id , taskName} = req.body;
    todo.forEach((element) =>{
        if (element.id === id) {
        element.taskName = taskName;
        }
    })
    res.status(200)
    res.json(todo);
})

//delete
app.delete('/delete',  (req, res)=> {
    const{id, taskName , isComplated} = req.body;
    todo.splice(1 ,1)
    res.status(200)
    res.json({id, taskName , isComplated})
});


app.listen(port, () =>{
    console.log(`run on port ${port}`);
})