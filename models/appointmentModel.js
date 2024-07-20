const mongoose =require('mongoose')

const appointmentSchema=new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    name:{type:String,required:true},


    
    
    userId:{
        type:String,
        required:true,
    },



    doctorId:{
        type:String,
        required:true,
    },
    
    doctorInfo:{
        type:String,
        required:true,
    },

    userInfo:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        required:true,
        default:'pending',
    },
    time:{
        type:String,
        required:true,
    }

},{timestamps:true})

const appointmentModel =mongoose.model('appointments',appointmentSchema)

module.exports=appointmentModel;