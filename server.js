const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:5000/evviDB');

const studentSchema = new mongoose.Schema({
    Name: String,
    Message: String
});

const Student = mongoose.model("Student", studentSchema);

const student1 = new Student({
    Name: "Database",
    Message: "Hi from Database."
});

// student1.save();

app.get("/", (req,res) => {
    Student.find({}, (err,data) => {
        if (err) {console.log(err)}
        else {
            res.send(data);
        }        
    });
});

app.listen("4000", () => {
    console.log("Server started at PORT: 4000");
});