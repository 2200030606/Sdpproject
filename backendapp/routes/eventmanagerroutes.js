const managercontroller =require('../controllers/eventmanagercontroller')

const express=require("express")
const managerrouter=express.Router()

managerrouter.post("/insertmanager",managercontroller.insertmanager)
managerrouter.post("/checkmanagerlogin",managercontroller.checkmanagerlogin)
managerrouter.post("/insertdetails",managercontroller.insertdetails)
managerrouter.get("/viewevents",managercontroller.viewevents)
managerrouter.get("/managerlogin/:email",managercontroller.managerlogin)

module.exports=managerrouter