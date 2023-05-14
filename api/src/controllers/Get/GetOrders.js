const { Router } = require('express');
const { OrdenCompra } = require("../../db")
const router = Router();


// pedimos todos los usuarios
router.get("/", async (req, res, next) => {
    try {
        const allOrders = await OrdenCompra.findAll()
        res.status(200).json(allOrders)
       
    } catch (error) {
        next(error)
        res.status(404)
    }
})

module.exports = router;