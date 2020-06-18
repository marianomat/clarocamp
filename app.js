const express = require("express"),
	  bodyParser = require("body-parser"),
	  app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

let campings = [
	{nombre: "Luz y fuerza Claromeco", imagen: "https://www.lu24.com.ar/wp-content/uploads/2020/01/luzyfuerza.jpg"},
	{nombre: "ACA Claromeco", imagen: "https://www.claromecoalquileres.com/images/claromeco/aca/campingACA-ClaromecoAlquileres-2.jpg"},
	{nombre: "Pehuen Claromeco", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7VG_QZd2ZYmHAu9lUWc32TS5k0_wAFDkbwjqvQVHLvgheMGNS&usqp=CAU"},
	{nombre: "Luz y fuerza Claromeco", imagen: "https://www.lu24.com.ar/wp-content/uploads/2020/01/luzyfuerza.jpg"},
	{nombre: "ACA Claromeco", imagen: "https://www.claromecoalquileres.com/images/claromeco/aca/campingACA-ClaromecoAlquileres-2.jpg"},
	{nombre: "Pehuen Claromeco", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7VG_QZd2ZYmHAu9lUWc32TS5k0_wAFDkbwjqvQVHLvgheMGNS&usqp=CAU"},
	{nombre: "Luz y fuerza Claromeco", imagen: "https://www.lu24.com.ar/wp-content/uploads/2020/01/luzyfuerza.jpg"},
	{nombre: "ACA Claromeco", imagen: "https://www.claromecoalquileres.com/images/claromeco/aca/campingACA-ClaromecoAlquileres-2.jpg"},
	{nombre: "Pehuen Claromeco", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7VG_QZd2ZYmHAu9lUWc32TS5k0_wAFDkbwjqvQVHLvgheMGNS&usqp=CAU"}
]
		
app.get("/", (req,res) => {
	res.render("home")
});

app.get("/campings", (req,res) => {
	res.render("campings", {campings: campings})
})

app.get("/campings/new", (req,res) => {
	res.render("form")
})

app.post("/campings", (req,res) => {
	let nombre = req.body.nombre;
	let imagen = req.body.imagen;
	let nuevoCamping = {nombre: nombre, imagen: imagen}
	campings.push(nuevoCamping)
	res.redirect("/campings")
})


app.listen("3000", () => {
	console.log("ESTAMOS ACTIVO")
})