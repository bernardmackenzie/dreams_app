const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;
const bankSchema = new mongoose.Schema({
    
    nama: {
        type: String,
        require: true
    },
    gambar: {
        type: String,
        require: true
    },
    nomorAkun: {
        type: Number,
        require: true
    },
    pemilikAkun: {
        type: String,
        require: true
    },
})

module.exports = mongoose.model('bank', bankSchema);