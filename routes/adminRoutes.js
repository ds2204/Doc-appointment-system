const  express  = require("express")
const authMiddleware = require('../middlewares/authMiddleware');
const { getAllUsersController, getAllDoctorsController, changeAccountStatusContoller } = require("../controllers/adminCtrl");

const router=express.Router()

router.get('/getAllUsers',authMiddleware,getAllUsersController)

router.get('/getAllDoctors',authMiddleware,getAllDoctorsController)

router.post('/changeAccountStatus',authMiddleware,changeAccountStatusContoller)

module.exports=router 