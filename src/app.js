const express = require('express');
require("../src/db/conn");

const user = require("../src/models/user")
const roles = require("../src/models/roles")
const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;


app.post("/user",async(req,res)=>{
    try {
        const addindUser = new user(req.body)
        console.log(req.body)
        const isnertUsers = await addindUser.save();
        res.send(isnertUsers)
    } catch (e) {
        res.send(e);
        
    }
})

app.post("/roles",async(req,res)=>{
    try {
        const addingRoles = new roles({
            "name":"tester"
        })
        
    } catch (e) {
        res.send(e);
        
    }
})

app.get("/", async(req,res) =>{
  res.send("it should work");
})


app.listen(port, ()=>{
    console.log('connection is live at the port no.  ${port}');
})