const User = require('../models/user');
const bcrypt = require('bcryptjs');
module.exports = {
    register: async (req, res) => {
        try {
            const user = await User.find();
            const alertMsg = req.flash('alertMsg');
            const alertStatus = req.flash('alertStatus');
            const alert = { message: alertMsg, status: alertStatus }
            res.locals.title = 'Dreams | User';
            res.render('pages/register', { alert });
        } catch (error) {
            console.log(error.message);
        };
    },

    postRegister: async (req, res) => {
        try {
            const { fullname, phone, email, password,} = req.body
            console.log(req.body);
            await User.create({
                fullname,
                phone,
                email,
                password,
                role: 'admin'
            });
            req.flash('alertMsg', 'Done, your account has been created');
            req.flash('alertStatus', 'success');
            res.redirect('/admin/register');
        } catch (error) {
            req.flash('alertMsg', 'Failed,error code:' + error.message);
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/register');
        }
    },

    login: async (req, res) => {
        try {
            const user = await User.find();
            const alertMsg = req.flash('alertMsg');
            const alertStatus = req.flash('alertStatus');
            const alert = { message: alertMsg, status: alertStatus }
            res.locals.title = 'Dreams | User';
            res.render('pages/login', { alert });
        } catch (error) {
            console.log(error.message);
        }
    },

authLogin: async (req,res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email:email});
        if(!user){
            req.flash('alertMsg', 'User email not found');
            req.flash('alertStatus', 'danger');
            return res.redirect('/admin');
        }
        const isPasswordMatch = await bcrypt.compare(password,user.password);
        if(!isPasswordMatch){
            req.flash('alertMsg', 'User password not found');
            req.flash('alertStatus', 'danger');
            return res.redirect('/admin');
        }
        if(user.role !== 'admin'){
            req.flash('alertMsg', 'Sorry, you are not admin!!');
            req.flash('alertStatus', 'danger');
            return res.redirect('/admin');
        }

        req.session.user = {
            id: user.id,
            fullname: user.fullname,
            email: user.email,
            phone: user.phone
        }
        req.flash('alertMsg', 'Selamat datang di halaman admin.');
        req.flash('alertStatus', 'success');
        res.redirect('/admin/dashboard');

    }catch(error){
        req.flash('alertMsg', 'Failed,error code:' + error.message);
        req.flash('alertStatus', 'danger');
        res.redirect('/admin');
    }
},

    index: async (req, res) => {
        try {
            const user = await User.find();
            const alertMsg = req.flash('alertMsg');
            const alertStatus = req.flash('alertStatus');
            const alert = { message: alertMsg, status: alertStatus }
            const userSession = req.session.user;
            res.locals.title = 'Dreams | User';
            res.locals.onPage = 'user';
            res.render('pages/user', { user, alert,userSession });
        } catch (error) {
            console.log(error.message);
        }
    },
    // store: async (req, res) => {
    //     try {
    //         const {
    //             fullname,
    //             phone,
    //             email,
    //             password,
    //             username,
    //             role,
    //             ispassenger

    //         } = req.body;

    //         await User.create({
    //             fullname,
    //             phone,
    //             email,
    //             password,
    //             username,
    //             role,
    //             ispassenger
    //         });
    //         req.flash('alertMsg', 'data berhasil di simpan');
    //         req.flash('alertStatus', 'success');
    //         res.redirect('/admin/user');

    //         // console.log(req.body);
    //     } catch (error) {
    //         console.log(error.message);
    //         req.flash('alertMsg', error.message);
    //         req.flash('alertStatus', 'danger');
    //         res.redirect('/admin/user');
    //     }
    // },
    update: async (req, res) => {
        try {
            const {id, fullname, phone, email, password, role, } = req.body
            console.log(req.body);

            await User.updateOne({ _id: id }, {
                fullname : fullname,
                phone :phone,
                email : email,
                password: password,
                role : role,
            })
            req.flash('alertMsg', 'Success , document has been update');
            req.flash('alertStatus', 'success');
            res.redirect('/admin/user')


        } catch (error) {
            console.log(error.message);
            req.flash('alertMsg', error.message);
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/user')
        }
    },
    delete: async (req, res) => {
        try{
            const  { id } =req.params;

            await User.deleteOne({_id:id})
            req.flash('alertMsg', 'Warning , document has been deleted');
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/user')

        } catch(error) {
            req.flash('alertMsg', error.message);
        req.flash('alertStatus', 'danger');
        res.redirect('/admin/user')
            console.log(error.message);
        }

    },
    search: async (req, res) => {
        try{
            const searchDocument = req.query.document || '';
            
            const regex = new RegExp(searchDocument, 'i');
            let user;
            if (searchDocument){
                user = await User.find({Fullname: regex})
            } else {
                user = await User.find({})
            }
            const alertMsg = req.flash('alertMsg');
            const alertStatus = req.flash('alertStatus');
            const alert = {
                message: alertMsg,
                status: alertStatus
            }
            res.locals.title = 'Dreams | User';
            res.locals.onPage = 'user';
            res.render('pages/user', { user, alert });
        } catch(error) {
            console.log(error.message);
            req.flash('alertMsg', error.message );
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/user');
        }
    },

    logout: async (req, res) => {
        try {
            req.session.destroy();
            res.redirect('/admin')
        } catch (error) {
            console.log(error)
        }
    }
};