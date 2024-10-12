const Bank = require ('../models/bank.js');

const fs = require ('fs');
const path = require ('path');
module.exports = {
    index: async (req, res) => {
        try {
            res.locals.title = 'Dreams | Bank';
            const bank = await Bank.find();
            console.log(bank);
            const alertMsg = req.flash('alertMsg');
            const alertStatus = req.flash('alertStatus');
            const alert = {
                message: alertMsg,
                status: alertStatus
            }
            res.render('pages/bank', {alert,bank});
        } catch(error) {
            console.log(error.message);
        }
    },

    store: async (req, res) => {
        try {
            const { nama, nomorAkun,pemilikAkun } = req.body;
            console.log(req.body);
            await Bank.create({ nama,gambar: req.file.filename, nomorAkun, pemilikAkun});
            
            req.flash('alertMsg', 'Data berhasil di simpan');
            req.flash('alertStatus', 'success');
            res.redirect('/admin/bank');
        } catch (error) {
            // console.error(error);
            req.flash('alertMsg','Failed, error code: ' + error.message );
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/bank');  
        }
    },

    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const data_kue = await Bank.findOneAndDelete({_id:id});
            if(data_kue && data_kue.gambar){
                const path_gambar = path.join(__dirname, '../public/images', data_kue.gambar);
                if (fs.existsSync(path_gambar)) {
                    fs.unlinkSync(path_gambar);
                }
            }
            req.flash('alertMsg', 'Data berhasil di hapus');
            req.flash('alertStatus', 'warning');
            res.redirect('/admin/bank');
        } catch(error) {
             // console.log(error.message);
                req.flash('alertMsg', error.message );
                req.flash('alertStatus', 'danger');
                res.redirect('/admin/bank');
        }
    },
    update: async (req, res) => {
        try {
            const { id, namaBank, nomorAkunBank, pemilikAkunBank} = req.body;
            console.log(req.body);
            if (req.file !== undefined) {
                const gambarBaru = req.file.filename;
                const data_kue = await Bank.findOne({_id:id});
                if (data_kue.gambar) {
                    const logoPath = `public/images/${data_kue.gambar }`;
                    fs.unlinkSync(logoPath); 
                }
                await Bank.updateOne({_id:id}, {
                    nama: namaBank,
                    nomorAkun: nomorAkunBank,
                    pemilikAkun: pemilikAkunBank,
                    gambar: gambarBaru,
                });
            } else {
                await Bank.updateOne({_id:id}, {
                    nama: namaBank,
                    nomorAkun: nomorAkunBank,
                    pemilikAkun: pemilikAkunBank,
                });
            }
            req.flash('alertMsg', 'Data berhasil di update');
            req.flash('alertStatus', 'success');
            res.redirect('/admin/bank');
        } catch(error) {
            console.log(error);
            req.flash('alertMsg','Failed, error code: ' + error.message );
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/bank');
        }
    }
}