import mongoose from "mongoose"

const todoSchema = new mongoose.Schema ({

    id:{
        type:Number,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    createdAt:{
        type: Date,
        required: true
    }
})

const Todo = new schema("Todo",todoSchema)
export default Todo