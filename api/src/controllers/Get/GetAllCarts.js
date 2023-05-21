const { Router } = require('express');
const { Carrito, Usuario, Producto } = require("../../db")
const router = Router();


router.get("/", async (req, res) => {
    try {
        const allCarts = await Carrito.findAll({
            include: [
                {
                model: Usuario,
                attributes: ["id", "admin", "visible", 'nombre', 'imagen', "email"]
                },
                { model: Producto,
                attributes: ["id", "nombre", "imagen", "precio","cantidad" ]
                }
            ]
        })
        res.status(200).json(allCarts)
       
    } catch (error) {
        next(error)
        res.status(404) 
    }
})

module.exports = router;