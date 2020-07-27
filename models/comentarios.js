const mongoose = require("mongoose");


const comentarioSchema = new mongoose.Schema({
	autor: String,
	texto: String 
})


module.exports = mongoose.model("Comentario", comentarioSchema)