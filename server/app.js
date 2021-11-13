const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { default: App } = require('../App');
require('./Dev')


app.use(bodyParser.json());

const Devs = mongoose.model("dev")



const mongoUri = 'mongodb+srv://Anonymous:3E2r%24bjteLsbW%2A%40@anonymous.wq4br.mongodb.net/Production?retryWrites=true&w=majority'

mongoose.connect(mongoUri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

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

app.post('/send-data',(req,res)=>{
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