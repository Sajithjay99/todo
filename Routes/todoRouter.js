import express from "express"
import {addTodo,getAllTodos} from "../Controllers/todoController"


const app = express()

app.post('/todo', addTodo);
app.get('/all',getAllTodos)

export default todoRouter ;                                        