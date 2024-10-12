module.exports = {
    index: async (req, res) => {
        try {
            res.locals.title = 'Dreams | Pembayaran';
            
            res.render('pages/pembayaran');
        } catch(error) {
            console.log(error.message);
          
        }
    }
}