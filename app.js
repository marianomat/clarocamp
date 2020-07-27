const express = require("express"),
	  bodyParser = require("body-parser"),
	  mongoose = require('mongoose'),
	  Camping = require("./models/campings"),
	  Comentario = require("./models/comentarios"),	  
	  seedDB = require("./seeds"),
	  app = express();

mongoose.connect('mongodb://localhost:27017/clarocamp', {useNewUrlParser: true, useUnifiedTopology: true});

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

//seedDB();


app.get("/", (req,res) => {
	res.render("home")
});	

app.get("/campings", (req,res) => {
	
	Camping.find({}, (error, todosCamping) => {
		if(error) {
			console.log(error)
		} else {
			res.render("./campings/index", {campings: todosCamping})
		}
	})
})

app.get("/campings/new", (req,res) => {
	res.render("./campings/new")
})

app.get("/campings/:id"), (req,res) => {
	Camping.findById(req.params.id, (error, campingEncontrado) => {
		if(error) {
			console.log(error)
		} else {
			//RENDER BLOG
			res.render("./campings/show", {campings: campingEncontrado});
		}
	})	
}


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