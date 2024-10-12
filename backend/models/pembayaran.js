const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;
const pembayaranSchema = new mongoose.Schema({
    
    pemesananId: {
        type: Date,
        default: Date.now,
        require: true
    },
    metodeBayarId: {
        type: String,
        enum: ['belum bayar','lunas','selesai']
    },
    Tanggal: {
        type: Date,
        enum: ['belum bayar','lunas','selesai']
    },
    status: {
        type: String,
        require: true
    },
})

module.exports = mongoose.model('pembayaran', pembayaranSchema);