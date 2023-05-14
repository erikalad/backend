const { Router } = require('express');
const { OrdenCompra } = require("../../../db")
const router = Router();


router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const ordenId = await OrdenCompra.findOne({
            where: { 
                id: id,
             },
            include: [{
                model: Usuario,
                attributes: ["id", "admin", "visible", 'nombre', 'imagen', "email"]
            }]
        })
        res.status(200).json(ordenId)
    } catch (error) {
        res.status(404).json(error);
    }
})

module.exports = router;