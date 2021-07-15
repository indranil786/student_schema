const express= require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/school_students', {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{console.log("Database Connected")}).catch((err)=>{console.log(err)});
app.use(express.json());
app.use(express.urlencoded({extended:false}))
const studentSchema=new mongoose.Schema({
    name:{
        type:String
    },
    contact:{
        type:String
    },
    subjects:[{
        type:String,
    }],
    class:{
        type:String
    },
    year:{type:String}

},{strict:false})
const Student= new mongoose.model("students",studentSchema);

app.post("/student/create",async (req,res)=>{
    const fields=req.body
    const student= new Student(req.body);
    student.save();
    res.json(student);
})

app.listen(3000,()=>{console.log("Server started at 3000")});