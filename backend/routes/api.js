var express = require('express');
var router = express.Router();
const apiController = require('../controller/apiController');
// const {authJWT }= require ('../middlewares/auth');
router.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Method', "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader('Access-Control-Allow-Headers', "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    next();
});
router.post('/daftar', apiController.daftar);
// =============================================================
router.post('/masuk' , apiController.masuk );
// =============================================================
router.get('/produk', apiController.indexProduk);
// =============================================================
router.get('/bank', apiController.indexBank);
// =============================================================
router.get('/promo', apiController.indexPromo);
// =============================================================
router.get('/testimoni', apiController.indexTestimoni);
module.exports = router;