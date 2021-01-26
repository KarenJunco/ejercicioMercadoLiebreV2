const productos = require('../data/productos'); /* REQUIERO EL JSON QUE PARSEO EN EL ARCHIVO PRODUCTOS.JS */

module.exports = {
    index : (req,res) => {

        let inSale = productos.filter(producto => {
            return producto.category == "in-sale"
        })

        let visited = productos.filter(producto => {
            return producto.category == "visited"
        })

        res.render('index', {
            title: "Home-page",
            productsInSale : inSale,
            productsVisited : visited
        })
    }
}