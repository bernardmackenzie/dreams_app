const Produk = require ('../models/produk');

const fs = require ('fs');
const path = require ('path');
module.exports = {
    index: async (req, res) => {
        try {
            res.locals.title = 'Dreams | Produk';
            const cake = await Produk.find();
            console.log(cake);
            const alertMsg = req.flash('alertMsg');
            const alertStatus = req.flash('alertStatus');
            const alert = {
                message: alertMsg,
                status: alertStatus
            }
            res.render('pages/produk', {alert,cake});
        } catch(error) {
            console.log(error.message);
          
        }
    },

    store: async (req, res) => {
        try {
            const { namaProduk, kategori, harga,desckripsi,isRecommendation } = req.body;
            // console.log(req.body);
            await Produk.create({ namaProduk, kategori, harga, gambar: req.file.filename, desckripsi,isRecommendation});
            
            req.flash('alertMsg', 'New document has been saved');
            req.flash('alertStatus', 'success');
            res.redirect('/admin/produk');
        } catch (error) {
            console.error(error);
            req.flash('alertMsg','Failed, error code: ' + error.message );
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/produk');  
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const data_kue = await Produk.findOneAndDelete({_id:id});
            if(data_kue && data_kue.gambar){
                const path_gambar = path.join(__dirname, '../public/images', data_kue.gambar);
                if (fs.existsSync(path_gambar)) {
                    fs.unlinkSync(path_gambar);
                }
            }
            req.flash('alertMsg', 'Warning, document has been deleted.');
            req.flash('alertStatus', 'warning');
            res.redirect('/admin/produk');
        } catch(error) {
             // console.log(error.message);
                req.flash('alertMsg', error.message );
                req.flash('alertStatus', 'danger');
                res.redirect('/admin/produk');
        }
    },
    update: async (req, res) => {
        try {
            const { id, namaProduk, kategoriProduk, hargaProduk, desckripsiProduk,isRecommendation} = req.body;
            if (req.file !== undefined) {
                const gambarBaru = req.file.filename;
                const data_kue = await Produk.findOne({_id:id});
                if (data_kue.gambar) {
                    const logoPath = `public/images/${data_kue.gambar }`;
                    fs.unlinkSync(logoPath); 
                }
                await Produk.updateOne({_id:id}, {
                    namaProduk: namaProduk,
                    kategoriProduk: kategoriProduk,
                    hargaProduk: hargaProduk,
                    gambar: gambarBaru,
                    desckripsiProduk: desckripsiProduk,
                    isRecommendation: isRecommendation,
                });
            } else {
                await Produk.updateOne({_id:id}, {
                    namaProduk: namaProduk,
                    kategoriProduk: kategoriProduk,
                    hargaProduk: hargaProduk,
                    desckripsiProduk: desckripsiProduk,
                    isRecommendation: isRecommendation,

                });
            }
            req.flash('alertMsg', 'Success, document has been updated');
            req.flash('alertStatus', 'success');
            res.redirect('/admin/produk');
        } catch(error) {
            req.flash('alertMsg','Failed, error code: ' + error.message );
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/produk');
        }
    }
}

