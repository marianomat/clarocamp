const mongoose = require("mongoose"),
	  Camping = require("./models/campings"),
	  Comentario = require("./models/comentarios")


const datos = [
	{
		nombre: "ACA Claromeco",
		imagen: "https://www.claromecoalquileres.com/images/claromeco/aca/campingACA-ClaromecoAlquileres-2.jpg"
	},
	{
		nombre: "test",
		imagen: "https://www.claromecoalquileres.com/images/claromeco/aca/campingACA-ClaromecoAlquileres-2.jpg"
	},
]

function seedDB() {
	Camping.remove({}, (err) => {
		if(err) {
			console.log(err)
		}
		datos.forEach((seed) => {
			Camping.create(seed, (error, camping) => {
				if(error) {
					console.log(error)
				} else {
					console.log("Camping Creado")
					Comentario.create({
						autor: "Carlos",
						texto: "Alto camping"
					}, (error, comentarioCreado) => {
						if(error) {
							console.log(error)
						} else {
							console.log("comentario creado")
							camping.comentarios.push(comentarioCreado)
							camping.save()
						}
					})
				}
			})
		})
	})
	
}


module.exports = seedDB