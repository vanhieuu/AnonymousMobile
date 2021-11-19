const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
dotenv.config();
const PORT = process.env.PORT || 4000;
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require('morgan')
require('../src/screens/SignIn')

app.use(bodyParser.json());

const Devs = mongoose.model("dev")



var mongoDB_atlas = `mongodb+srv://Anonymous:3E2r%24bjteLsbW%2A%40@anonymous.wq4br.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
mongoose.connect(mongoDB_atlas,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    function (err) {
        if (err) throw err;
        console.log('Successfully connected');
    });

mongoose.connection.on("connected",()=>{
    console.log('connected to mongo')
})
mongoose.connection.on("err",(err)=>{
    console.log('Error',err)
})

app.get('/',(req,res)=>{
    Devs.find({}).then(data=>{
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})

app.post('/login',(req,res)=>{
    const dev = new Devs({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        picture:req.body.picture,
        salary:req.body.salary,
        position:req.body.position
    })
    dev.save()
    .then(data=>{
        console.log(data)
        res.send("success")
    }).catch(err =>{
        console.log(err)
    })
})

app.post('/delete',(req,res)=>{
    Devs.findByIdAndRemove(req.body.id)
    .then(data=>{
        console.log(data)
        res.send('deleted')
    })
})

app.post('/update',(req,res)=>{
    Devs.findByIdAndUpdate(req.body.id,{
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        picture:req.body.picture,
        salary:req.body.salary,
        position:req.body.position
    }).then(data=>{
        console.log(data)
        res.send('updated')
    })
    .catch(err=>{
        console.log(err)
    })
})


app.listen(3000,()=>{
    console.log('server running')
})