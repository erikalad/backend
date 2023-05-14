const { Router } = require('express');
const { Producto } = require("../../db")
const router = Router();


// pedimos todos los usuarios
router.get("/", async (req, res, next) => {
    try {
        const allProducts = await Producto.findAll()
        res.status(200).json(allProducts)
       
    } catch (error) {
        next(error)
        res.status(404)
    }
})

module.exports = router;