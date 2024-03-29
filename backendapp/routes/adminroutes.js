const admincontroller = require("../controllers/admincontroller")

const express = require("express")
const adminrouter = express.Router()

adminrouter.get("/viewclients",admincontroller.viewclients)
adminrouter.post("/checkadminlogin",admincontroller.checkadminlogin)
adminrouter.get("/viewmanagers",admincontroller.viewmanagers)
adminrouter.delete("/deleteclients:email",admincontroller.deleteclient)
adminrouter.delete("/deletemanager:email",admincontroller.deletemanager)

module.exports=adminrouter