const express = require("express"),
	  bodyParser = require("body-parser"),
	  mongoose = require('mongoose'),
	  app = express();

mongoose.connect('mongodb://localhost:27017/clarocamp', {useNewUrlParser: true, useUnifiedTopology: true});

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

const Camping = mongoose.model('Camping', { nombre: String, imagen: String });

app.get("/", (req,res) => {
	res.render("home")
});

app.get("/campings", (req,res) => {
	
	Camping.find({}, (error, todosCamping) => {
		if(error) {
			console.log(error)
		} else {
			res.render("campings", {campings: todosCamping})
		}
	})
})

app.get("/campings/new", (req,res) => {
	res.render("form")
})

app.post("/campings", (req,res) => {
	
	let nombre = req.body.nombre;
	let imagen = req.body.imagen;
	let nuevoCamping = {nombre: nombre, imagen: imagen}
	
	Camping.create(nuevoCamping, (error, nuevoCamping) => {
		if(error) {
			console.log(error)
		} else {
			console.log("Camping añadido!!!")
			res.redirect("/campings")
		}
	})
})


app.listen("3000", () => {
	console.log("ESTAMOS ACTIVO")
})