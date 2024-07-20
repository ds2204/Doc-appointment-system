const appointmentModel = require('../models/appointmentModel')
const doctorModel=require('../models/doctorModel')
const userModel = require('../models/userModels')
const getDoctorInfoController=async(req,res)=>{
    try{
        const doctor=await doctorModel.findOne({userId:req.body.userId})
        res.status(200).send({
            success:true,
            message:'doctor data fetch success',
            data:doctor
        })

    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Error in fetching doctor details'
        })
    }

}

const updateProfileController=async(req,res)=>{
    try{
        const doctor=await doctorModel.findOneAndUpdate({userId:req.body.userId},req.body)
        res.status(201).send({
            success:true,
            message:"Doctor profile updated",
            data:doctor
        })

    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Doctor Profile Update issue',
            error
        })
    }
}

//get single doc
const getDoctorByIdController=async(req,res)=>{
    try{

        const doctor=await doctorModel.findOne({_id:req.body.doctorId})
        res.status(200).send({
            success:true,
            message:"Single Doc info",
            data:doctor
        })
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in Single doc info',
            error
        })

    }
}

const doctorAppointmentsController=async(req,res)=>{
    try{
        const doctor=await doctorModel.findOne({userId:req.body.userId})
        const appointments=await appointmentModel.find({
            doctorId:doctor._id
        })
        
        res.status(200).send({
            success:true,
            message:"Doctor Appointments fetched Successfully",
            data:appointments
        })
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in Doc Appointments',
            error
        })
    }
}

const updateStatusController=async(req,res)=>{
    try{
        const {appointmentsId,status}=req.body
        const appointments=await appointmentModel.findByIdAndUpdate(appointmentsId,{status})
        const user=await userModel.findOne({_id:appointments.userId})
        const notification=user.notification
        notification.push({
           type:'Status Updated',
           message:`Your Appointment has been Updated ${status}`,
           onClickPath:'/doctor-appointments'
    })
    await user.save()
    res.status(200).send({
        success:true,
        message:'Appointment Status Updated',
        })

    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in update status',
            error
        })
    }

}

module.exports={getDoctorInfoController,updateProfileController,getDoctorByIdController,doctorAppointmentsController,updateStatusController}