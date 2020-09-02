module.exports = function (app) {
	
    app.get('/customer-cep/:cep', (req, res) => {
	    
	const filtro = req.query.filtro

        return res.status(404).send(false)

    })

}