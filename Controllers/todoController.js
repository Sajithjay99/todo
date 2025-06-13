import Todo from "../models/todo";


export function addTodo(req,res){

    const tododata = req.body;
    const newData = Todo(tododata);


    newData.save().then(
        ()=>{
            res.status(200).json(
                {
                    message:"todo addded successfully"
                }
            )
        }
    ).then(
        (err)=>{
            res.status(500).json(
                {
                    message : "todo added not successfull"
                   
                    
                }
            )
        }
    )
}


export function getAllTodos(req,res){

    const tododata = req.body;

    Todo.find().then(

        (result)=>{
            res.status(200).json(
                result
            )
        }
    )
}

