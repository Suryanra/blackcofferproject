const express=require('express')
const app=express();
const {dbConnect}=require('./config/database')
dbConnect();
const BlackCofferModel =require('./models/BlackCofferDataset')
var cors = require('cors')


app.use(cors({
  origin: 'http://localhost:3000', // No trailing slash
  credentials: true
}));

app.get('/',async(req,resp)=>{
      const data=await BlackCofferModel.find({});
resp.send(data);
})




app.listen(3001,()=>
{
console.log("server listening at 3001 port");
})

