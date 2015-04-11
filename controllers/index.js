var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	thankYou: function(req, res) {
		res.render('thanks');
	}
};

module.exports = indexController;