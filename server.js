const express=require('express')
const colors=require('colors')
const morgan=require('morgan')
const dotenv=require('dotenv');
const connectDB = require('./config/db');
const path = require('path');

//dotenv config
dotenv.config();

//mongodb connection
connectDB();

//rest object
const app=express()

//middlewares
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/user',require('./routes/userRoutes'));
app.use('/api/v1/admin',require("./routes/adminRoutes"));
app.use('/api/v1/doctor',require('./routes/doctorRoutes'))
app.use(express.static(path.join(__dirname,'./client/build')))

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
})

//listen
const port=process.env.PORT||8080
app.listen(port,()=>{
    console.log(`server running in ${process.env.NODE_MODE} MOde on port ${process.env.PORT}`.bgCyan.white
    );
});

app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ limit: '50mb' }));
