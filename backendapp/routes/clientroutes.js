const clientcontroller =require('../controllers/clientcontroller')

const express=require("express")
const clientrouter=express.Router()

clientrouter.post("/insertclient",clientcontroller.insertclient)
clientrouter.post("/checkclientlogin",clientcontroller.checkclientlogin)
clientrouter.get("/clientlogin/:email",clientcontroller.clientlogin)

module.exports=clientrouter