import express from 'express'
import mongoose from 'mongoose';
import { shortUrl, getOriginalUrl } from "./Controllers/url.js";

const app = express();

app.use(express.urlencoded({extended:true}))

mongoose.connect("mongodb+srv://khatesanchit10022001:WT4IX44CY2p22dGC@cluster0.x64us5n.mongodb.net/",{
    dbName: "Node_JS"
   }
    ).then(()=> console.log("MongoDB connected..!")).catch((err)=>console.log(err))

    // Rendering the EJS file
    app.get('/',(req,res)=>{
        res.render("index.ejs", {shortUrl :null})
    })

    // URL Shortner Logic
    app.post('/short', shortUrl)

     // Redirect to original url using short code :- dynamic routing
    app.get("/:shortCode", getOriginalUrl);

const  port = 1000;

app.listen(port, ()=> console.log(`Server is running on port ${port}`))