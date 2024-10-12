module.exports = {
    index: async (req, res) => {
        try {
            res.locals.title = 'Dreams | keranjang';
            
            res.render('pages/keranjang');
        } catch(error) {
            console.log(error.message);
          
        }
    }
}