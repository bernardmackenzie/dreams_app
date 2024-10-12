module.exports = {
    index: async (req, res) => {
        try {
            res.locals.title = 'Dreams | Dashboard';
            const alertMsg = req.flash('alertMsg');
            const alertStatus = req.flash('alertStatus');
            const alert = {
                message: alertMsg,
                status: alertStatus
            }
            res.render('pages/dashboard', {alert});
        } catch(error) {
            console.log(error.message);
            
        }
    }
}