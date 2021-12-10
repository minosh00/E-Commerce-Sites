import express from "express"
import cors from "cors"
import mongoose from "mongoose"



const app= express()
 app.use(express.json())
 app.use(express.urlencoded())
 app.use(cors())



const PORT = 8000;
const DB_URL = 'mongodb+srv://minosh:minosh@cluster0.haz65.mongodb.net/LoginandRegister?retryWrites=true&w=majority'
mongoose.connect(DB_URL, {
    
    //type warnings
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log('DB connected');
})


.catch((err)=> console.log('DB connect failed', err));

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});

//model class

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)



// 

const HomeimprovementSchema = new mongoose.Schema({
 

    Homeimprovement_Name :{
        type:String,
        require:true
    },
   
    Homeimprovement_category:{
        type:String,
        require:true
    },
    funitPrice :{
        type:String,
        require:true
    },
    shippingCost:{
        type:String,
        require:true
    },
    quntityAvailable :{
        type:String,
        require:true
    },
})




const WatchesSchema = new mongoose.Schema({
 

    Watches_Name :{
        type:String,
        require:true
    },
  
    Price :{
        type:String,
        require:true
    },
    shippingCost:{
        type:String,
        require:true
    },
    quntityAvailable :{
        type:String,
        require:true
    },
})






const ApparelSchema = new mongoose.Schema({
 

    Apparel_Name :{
        type:String,
        require:true
    },
  
    Price :{
        type:String,
        require:true
    },
    shippingCost:{
        type:String,
        require:true
    },
 
})















//Routes
app.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 

app.post("/register", (req, res)=> {
    const { name, email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) 

const Homeimprovement = mongoose.model("Homeimprovement",HomeimprovementSchema);

app.get("/Homeimprovement", (req, res) =>{

    Homeimprovement.find()
    .then(Homeimprovement =>res.json(Homeimprovement))
   .catch(err => res.status(400).json(`${err}`));

})




const Watches = mongoose.model("Watches",WatchesSchema);

app.get("/Watches", (req, res) =>{

    Watches.find()
    .then(Watches =>res.json(Watches))
   .catch(err => res.status(400).json(`${err}`));

})



const  Apparel = mongoose.model(" Apparel", ApparelSchema);

app.get("/Apparel", (req, res) =>{

    Apparel.find()
    .then( Apparel =>res.json( Apparel))
   .catch(err => res.status(400).json(`${err}`));

})






