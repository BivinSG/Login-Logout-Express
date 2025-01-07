const express = require("express")
const app = express()
const hbs = require("hbs")
const session = require("express-session")
const nocache = require("nocache")
const userRoute = require("./Routes/user")

app.use(session({
    secret: 'keyboard cat',
    resave : false,
    saveUninitialized:true
}))

app.use(nocache())


app.use(express.static("public"))

app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use("/",userRoute) //any request that comes to the server will go to the userRoute.

app.set("view engine","hbs")






//this piece of code is only needed
// app.get("/",(req,res)=>{
//     if(req.session.passwordwrong){
//         res.render("login",{msg:"Invalid Credentials"})
//         req.session.passwordwrong=false
//     }else{
//         res.render("login")
//     }
// })

// app.post("/verify",(req,res)=>{
//     if(username === req.body.username && password === req.body.password){
//         req.session.user = req.body.username
//         res.redirect("/home")
//     }else{
//         req.session.passwordwrong = true
//         res.redirect("/")
//     }
// })
// app.get("/home",(req,res)=>{
//     if(req.session.user){
//         res.render("home")
//     }else{
//         res.render("login")
//     }
// })


app.listen(3022,()=>{
    console.log("Server Listening at port 3022")
})