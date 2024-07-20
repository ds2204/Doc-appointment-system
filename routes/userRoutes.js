const express=require('express')
const { loginController, registerController, authController,applyDoctorController,getAllNotificationController ,deleteAllNotificationController, getAllDoctorsController, bookAppointmentController, bookingAvailabilityController, userAppointmentsController} = require('../controllers/userCtrl');
const authMiddleware = require('../middlewares/authMiddleware');
const router=express.Router()

//routes
//Login||post

router.post('/login',loginController);

//register||post
router.post('/register',registerController);

//auth||Post
router.post('/getUserData',authMiddleware,authController)

//apply doctor||Post
router.post('/apply-doctor',authMiddleware,applyDoctorController)


//notification doctor||Post
router.post('/get-all-notification',authMiddleware,getAllNotificationController)

router.post('/delete-all-notification',authMiddleware,deleteAllNotificationController)

//get all doc
router.get('/getAllDoctors',authMiddleware,getAllDoctorsController)

//book appointment
router.post('/book-appointment',authMiddleware,bookAppointmentController)

//check availability
router.post('/booking-availability',authMiddleware,bookingAvailabilityController)

//appointments list
router.get('/user-appointments',authMiddleware,userAppointmentsController)

module.exports=router