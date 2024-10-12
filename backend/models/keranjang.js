const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;
const keranjangSchema = new mongoose.Schema({
    
    userId: {
        type: ObjectId,
        ref: 'user',
        require: true
    },
    items :[
        {
            produkId: {
                type: ObjectId,
                ref: 'produk',
                require: true
            },
            qty: {
                type: Number,
                require: true
            },
            subTotal: {
                type: Number,
                require: true
            }
        }
    ],
    totalBayar: {
        type: Number,
        require: true
    }
})

module.exports = mongoose.model('keranjang', keranjangSchema);