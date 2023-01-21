const express= require("express")
const dotenv=require("dotenv").config();
const cors =require("cors")
const port = 5000;

const app = express ()




//autorisation cors
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true,
   optionsSuccessStatus:200,
}));

// middleware qui permet de traiter les données de la requetes
app.use(express.json());
app.use(express.urlencoded({extended:false}));


//lancer le serveur
app.listen (port, ()=> console.log("server a démarré au port: " +port))

//nos routes 
app.use("/post",require("./routes/post.routes"))


