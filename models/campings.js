const mongoose = require("mongoose");

const campingSchema = new mongoose.Schema({
	nombre: String,
	imagen: String,
	comentarios: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Comentario" 
	}]
	
})


module.exports = mongoose.model("Camping", campingSchema)