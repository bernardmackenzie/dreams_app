const JWT = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const Produk = require('../models/produk');
const Bank = require('../models/bank');
const Promo = require('../models/promo');
const Testimonial = require('../models/testimonial');
module.exports = {
    daftar: async (req, res) => {
        try {
            const { fullname, email, phone, password, } = req.body;
            console.log(req.body)
            res.status(200).json({ message: 'Berhasil daftar' })
            await User.create({
                fullname, email, phone, password, role: 'Customer',
            })
        } catch (error) {
            console.log(error.message)
            res.status(400).json({
                message: 'Failed, Please check again you code',
            });
        }
    },
    masuk: async (req, res) => {
        try {
            const { email, password } = req.body;
            console.log(req.body)
            const user = await User.findOne({ email: email })
            if (!user) {
                res.status(400).json({ message: 'User Email not found!' })
            }
            const isPasswordMatch = await bcrypt.compare(password, user.password);
            if (!isPasswordMatch) {
                res.status(400).json({ message: 'User Email not found!' })
            }
            if (user.role != 'Customer') {
                res.status(400).json({ message: 'Sorry,customer only!' })
            }
            const token = JWT.sign({
                id: user.id,
                fullname: user.fullname,
                email: user.email,
                phone: user.phone
            },
                "RANDOM-TOKEN",
                {
                    expiresIn: "2h"
                }
            );
            res.status(200).json({
                token,
                fullname: user.fullname,
                email: user.email,
                phone: user.phone
            });
        } catch (error) {
            console.log(error.message)
            res.status(400).json({
                message: 'Failed',
            });
        }
    },
    indexProduk: async (req, res) => {
        try {
            const cake = await Produk.find();
            res.status(200).json({ message: ' Success', cake })
            
        } catch (error) {
            res.status(400).json({
                message: 'Failed, Please check again you code',
            });
        }
    } ,
    indexBank: async (req, res) => {
        try {
            const databank = await Bank.find();
            res.status(200).json({ message: ' Success', databank })
            
        } catch (error) {
            res.status(400).json({
                message: 'Failed, Please check again you code',
            });
        }
    } ,
    indexPromo: async (req, res) => {
        try {
            const documentPromo = await Promo.find();
            res.status(200).json({ message: ' Success', documentPromo })
            
        } catch (error) {
            res.status(400).json({
                message: 'Failed, Please check again you code',
            });
        }
    } ,
    indexTestimoni: async (req, res) => {
        try {
            const testimonial = await Testimonial.find();
            res.status(200).json({ message: ' Success', testimonial })
            
        } catch (error) {
            res.status(400).json({
                message: 'Failed, Please check again you code',
            });
        }
    } ,
    
};