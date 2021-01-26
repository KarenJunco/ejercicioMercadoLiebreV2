const productos = require('../data/productos'); //requiero el json que parseo en el archivo productos.js

module.exports = {
    detail : (req, res) => {

        let producto = productos.find(producto => {
            return producto.id === Number(req.params.id) && producto.category === req.params.category
        })
        res.render('productDetail',{
            title : "Detalle de producto",
            producto
        })
    }
}