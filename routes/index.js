const { v4: uuidv4 } = require('uuid');
const routes = require("express").Router()
const fs = require("fs")
routes.get("/notes",(req,res)=>{
const db = JSON.parse(fs.readFileSync("db/db.json"))
res.json(db)
})
routes.post("/notes",(req,res)=>{
    const tempNote = req.body
    tempNote.id = uuidv4()
    const db = JSON.parse(fs.readFileSync("db/db.json"))
    db.push(tempNote)
    fs.writeFileSync("db/db.json",JSON.stringify(db))
    res.json(tempNote)
})




module.exports=routes