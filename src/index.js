const express=require("express");
const cors=require("cors");

require("dotenv").config()

const port=process.env.PORT || 7005

const  connect  = require("./configs/db");
const app=express();

app.use(express.json())
app.use(cors());

const userController=require("./controller/user.controller")
const haircontr=require("./controller/hairs.controller")
const babycont=require("./controller/baby.cont")
const bodycont=require("./controller/body.cont")
const facecont=require("./controller/face.cont")
const assinCont=require("./controller/assendingorder.controller")
const {login,register}=require("./controller/auth.controller")




app.post("/register",register)
app.post("/login",login)

app.use("/ass",assinCont)
app.use("/products",userController)
app.use("/hairs",haircontr)
app.use("/babys",babycont)
app.use("/face",facecont)
app.use("/body",bodycont)




app.listen(port,async ()=>{
    try{
        await connect();
        console.log(`listing on port${port}`)
    }catch(err){
        console.log(err.message);
    }
   
})