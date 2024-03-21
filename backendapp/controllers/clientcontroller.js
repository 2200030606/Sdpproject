const Client=require('../models/Client')

const insertclient =async(request,response)=>{
    try
    {
                 const input=request.body
                 const client=new Client(input)
                 await client.save()
                 response.send("Registered Succesfully")
    }
    catch(err)
    {
        response.status(500).send(err.message)
    }
}

const checkclientlogin = async (request, response) => 
  {
     try 
     {
       const input = request.body
       const client = await Client.findOne(input)
       response.json(client)
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };
   const clientlogin = async (request,response)=>
   {
     try
     {
       const {email}=  request.params
       const clientdetails =await Client.findOne({email})
       if(clientdetails)
         {
           response.json(clientdetails)
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

module.exports={insertclient,checkclientlogin,clientlogin}