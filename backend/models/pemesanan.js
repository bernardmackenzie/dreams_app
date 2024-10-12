const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;
const pemesananSchema = new mongoose.Schema({
    
    userId: {
        type: Date,
        default: Date.now,
        require: true
    },
    keranjangId: {
        type: String,
        enum: ['belum bayar','lunas','selesai']
    },
    Tanggal: {
        type: Date,
        enum: ['belum bayar','lunas','selesai']
    },
})

module.exports = mongoose.model('pemesanan', pemesananSchema);