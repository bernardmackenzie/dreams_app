var express = require('express');
var router = express.Router();
const dashboardController = require('../controller/dashboardController');
const produkController = require('../controller/produkController');
const pemesananController = require('../controller/pemesananController');
const pembayaranController = require('../controller/pembayaranController');
const userController = require('../controller/userController');
const keranjangController = require('../controller/keranjangController');
const bankController = require('../controller/bankController');
const promoController = require('../controller/promoController');
const testimonialController = require('../controller/testimonialController');
const{ upload } = require('../middlewares/multer'); 
const produk = require('../models/produk');
const pemesanan = require('../models/pemesanan');
const bank = require('../models/bank');

const{ checkLogin } = require('../middlewares/auth');

const { 

    validatePromo, 

} = require('../middlewares/validation');

// // register
router.get('/register', userController.register);
router.post('/auth-register', userController.postRegister)
// // login
router.get('/', userController.login);
router.post('/auth-login', userController.authLogin)
router.use(checkLogin);


/* GET home page. */
router.get('/dashboard',dashboardController.index);
// produk 
router.get('/produk',produkController.index);
router.post('/tambah-produk',upload.single('gambar'),produkController.store);
router.put('/ubah-produk',upload.single('gambar'),produkController.update);
router.delete('/delete-produk/:id',produkController.delete);

// pemesanan
router.get('/pemesanan',pemesananController.index);
// pembayaran
router.get('/pembayaran',pembayaranController.index);
// user 
router.get('/user',userController.index);
router.put('/update-user', userController.update);
// keranjang 
router.get('/keranjang',keranjangController.index);
// bank 
router.get('/bank',bankController.index);
router.post('/tambah-bank',upload.single('gambar'),bankController.store);
router.put('/ubah-bank',upload.single('gambar'),bankController.update);
router.delete('/delete-bank/:id',bankController.delete);
// promo
router.get('/promo', promoController.index);
router.post('/create-promo',upload.array('image',2), promoController.store);
router.put('/update-promo',upload.array('image',2), promoController.update);
router.delete('/delete-promo/:id', promoController.delete);
// testimonial
router.get('/testimonial', testimonialController.index);
router.post('/create-testimonial',upload.single('image'), testimonialController.store);
router.put('/update-testimonial',upload.single('image'),testimonialController.update);
router.delete('/delete-testimonial/:id', testimonialController.delete);

router.get('/logout', userController.logout);
module.exports = router;