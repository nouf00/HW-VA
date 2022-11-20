import  express  from "express";
import { v4 as uuidv4 } from 'uuid';
import validate from "../Middleware/Val";
import { parkSchema ,parkSchemaType} from "../Schema/park";


 const route=express.Router()
const rides :parkSchemaType[]=[]


// post

route.post("/" , validate(parkSchema),  (req, res, next) => {
const newRides = req.body as parkSchemaType
newRides.id = uuidv4();
rides.push(newRides)
return res.status(200).json({ message: 'New Rides added !',
  });
} )



//get
route.get('/', (req,res,next)=>{
    return res.status(200).json(rides);
})

//put
route.put('/:id' , validate(parkSchema),  (req, res) => {
    const AddnewRides = req.body as parkSchemaType
    const updatedNameList  = rides.filter((R) => {
        return !R.id } )

    rides.push(AddnewRides)
    return res.status(200).json({ message: 'New Rides added !',
      });
   } )


//del
route.delete('/:id' , validate(parkSchema),  (req, res) => {
    const AddnewRides = req.body as parkSchemaType
    const updatedNameList  = rides.filter((R) => {
        return !R.id } )

    return res.status(200).json({ message: 'Rides delete!',
      });
   } )


export default route;