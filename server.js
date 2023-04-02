console.log("This is a Back-end Server.");

const express = require('express');
const mongoose= require('mongoose');
const morgan = require('morgan');
const blogdata = require('./model/Blogdata');
// const alert = require('alert');

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json())


app.use(morgan('dev'));

// Mongoose connection
const url='mongodb+srv://rahul-user:Rahul1994@nodetutes.6tllifg.mongodb.net/crudOperation?retryWrites=true&w=majority';

mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true })
.then((result)=>{
    console.log('connection to database sucessful');
})
.catch((err)=>console.log(err))


app.use('/add-data',(req,res)=>{
    const detail = req.body;
    console.log(detail);
    console.log('inside detail');
    if (detail){
        // alert("data received")  /// this create a pops-up message externally
        res.status(200).json({message:"successfully got data"}) // This is used to send message according to status code
    }
    else{
        // alert('data dint not recive')
        res.status(404).json({message: "Data did not find"})
    }

    const {name, email, password, blog} = detail;

    const BlogTelling =new blogdata({name, email, password, blog})

    BlogTelling.save()
    // .then((result)=>{
    //     res.status(200).json({message:"Data save to Database"})
    //     res.send(result)
    //     next()
    // })
    // .catch((err)=>{
    //     console.log(err);
    // })
    .then((result)=>console.log(result))
    .catch((err)=>console.log(err))
})


app.listen(3000,()=>{
    console.log('server is running in port 3000');
})