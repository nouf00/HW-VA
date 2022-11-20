import  express  from "express";
import Ridesroute from "./Route/parkRout";


const app =express();
app.use(express.json());

app.use("/rides" , Ridesroute )















































app.listen(5000, ()=>
console.log(" the porrt 5000 is work "));