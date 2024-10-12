const {body, validationResult} = require('express-validator');
// const documentPromo = require('../models/promo');


exports.validatePromo = [
    body('namaProduk')
    .notEmpty().withMessage('namaProduk is required')
    .isLength({ min:4, max:20}).withMessage('namaProduk must be between 5 until 20 characters')
    .matches(/^[a-zA-Z\s]+$/).withMessage('namaProduk must only contain letters and spaces'),
    // .custom((value) => {
    //     return documentPromo.find({ namaProduk: value }).then(P]promo => {
    //         if (promo.length > 0) {
    //             throw new Error("Promo namaProduk is taken!");
    //         }
    //     });
    // }),
    body('kategori')
    .notEmpty().withMessage('kategori is required')
    .matches(/^[a-zA-Z\s]+$/).withMessage('Name kategori must only contain letters and spaces')
    .isLength({ min: 4, max: 20}).withMessage('Name kategori must be between 5 until 20 characters'),

    body('harga')
    .notEmpty().withMessage('harga is required') 
    .isNumeric().withMessage('harga must be a numeric')
    .custom((value) => {
        if (value < 200000  || value > 5000000) {
            throw new Error('harga must be between 100.000 IDR until 5.000.000 IDR');
        }
        return true;
    }),
    // body('image').custom((value, { req }) => {
    //     if (!req.file) {
    //         throw new Error('Image is required');
    //     }
    //     return true;
    // }),
    
    body('isRecommendation')
    .notEmpty().withMessage('Recommendation is required')
    .isBoolean().withMessage('Recommendation must be selected'),
    // handling error validation
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.json({ errors: errors.array() });
        }
        next();
    }
];