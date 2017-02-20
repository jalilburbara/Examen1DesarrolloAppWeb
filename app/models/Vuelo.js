var mongoose = require('mongoose');

module.exports = mongoose.model('Vuelo', {
    _id: Number,
    aerolínea: String,
    ciudadOrigen: String,
    ciudadDestino: String,
    fechaYHoraDeSalida: {type: Date, default: Date.Now},
    fechaTHoraDeLlegada: {type: Date, default: Date.Now}
});