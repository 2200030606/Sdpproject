const EventManager =require('../models/EventManager')


const insertmanager =async(request,response)=>{
    try
    {
                 const input=request.body
                 const eventmanager=new EventManager.eventmanager(input)
                 await eventmanager.save()
                 response.send("Registered Succesfully")
    }
    catch(err)
    {
        response.status(500).send(err.message)
    }
}

const checkmanagerlogin = async (request, response) => 
{
   try 
   {
     const input = request.body
     console.log(input)
     const admin = await EventManager.eventmanager.findOne(input)
     response.json(admin)
   } 
   catch (error) 
   {
     response.status(500).send(error.message);
   }
 };

 const insertdetails =async(request,response)=>{
  try
  {
               const input=request.body
               const eventdetails=new EventManager.eventdetails(input)
               await eventdetails.save()
               response.send("Registered Succesfully")
  }
  catch(err)
  {
      response.status(500).send(err.message)
  }
}



const viewevents = async (request, response) => 
 {
    try 
    {
      const client = await EventManager.eventdetails.find();
      if(client.length==0)
      {
        response.send("DATA NOT FOUND");
      }
      else
      {
        response.json(client);
      }
    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };

  const managerlogin = async (request,response)=>
{
  try
  {
    const {email}=  request.params
    const managerdetails =await EventManager.eventmanager.findOne({email})
    if(managerdetails)
      {
        response.json(managerdetails)
      }
      else
      {
        response.send(" ID not found")
      }
  }
  catch(error)
  {
              response.send(500).send(error.message)
  }
}



module.exports={insertmanager,checkmanagerlogin,insertdetails,viewevents,managerlogin}