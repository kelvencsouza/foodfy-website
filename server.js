const express = require('express')
const nunjucks = require('nunjucks')
const server = express()
const recipes = require('./data')

server.use(express.static('public'))
server.use(express.static('assets'))

server.set("view engine", "njk")
nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res) {
    return res.render("index")
})

server.get("/layout", function(req, res) {
    return res.render("layout")
})

server.get("/receitas", function(req, res) {
    return res.render("receitas")
})

server.get("/sobre", function(req, res) {
    return res.render("sobre")
})

server.listen(process.env.PORT || 3000, function() {
    console.log("Server is running!")
})
