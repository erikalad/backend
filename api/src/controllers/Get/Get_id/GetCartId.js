const { Router } = require('express');
const { Carrito, Usuario, Producto } = require("../../../db")
const router = Router();


router.get("/:id", async (req, res, next) => {
    try {
        const {id} = req.params
        if (id) {
            const cartId = await Carrito.findByPk(id, {
                where: {
                    id: id,
                },
                include: [
                    {
                        model: Usuario,
                        attributes: ["id", "admin", "visible", 'nombre', 'imagen', "email"]
                    },
                    {
                        model: Producto,
                        attributes: ["nombre", "cantidad" ,"precio"]
                    }
                ]
            })
            res.status(200).json(cartId);

        }
    } catch (error) {
        next(error)
        res.status(404)
    }
})

module.exports = router;