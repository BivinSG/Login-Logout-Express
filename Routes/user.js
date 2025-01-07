const express = require("express")
const user = express.Router()
const username = "admin"
const password = "admin@123"

user.get("/",(req,res)=>{
    if(req.session.username){
        res.render("home")
    }else{
        if(req.session.passwordwrong){
            res.render('login',{msg : "Invalid Credentials"})        
            req.session.passwordwrong=false
        }else{
            res.render('login')
        }
    }

})

user.post("/verify",(req,res)=>{
    if(username === req.body.username && password === req.body.password){
        req.session.user = req.body.username
        res.redirect("/home")
    }else{
        req.session.passwordwrong = true
        res.redirect("/")
    }
})


user.get("/home",(req,res)=>{
    if(req.session.user){
        res.render("home")
    }else{
        if(req.session.passwordwrong){
            res.render("login",{msg : "invalid credentials"})
        }else{
            res.render('login')
        }
    }
})

user.get("/logout",(req,res)=>{
    req.session.destroy()
    res.render("login",{msg : "Logged Out"})
})


module.exports = user