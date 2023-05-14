const { Router } = require('express');
const { Producto } = require("../../../db")
const router = Router();


router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const productId = await Producto.findOne({
            where: { 
                id: id,
             },
            include: [{
                model: Usuario,
                attributes: ["id", "admin", "visible", 'nombre', 'imagen', "email"]
            }]
        })
        res.status(200).json(allConsultations)
    } catch (error) {
        res.status(404).json(error);
    }
})

module.exports = router;