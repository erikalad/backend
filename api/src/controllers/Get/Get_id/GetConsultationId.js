const { Router } = require('express');
const { Consulta, Usuario } = require("../../../db")
const router = Router();


router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const consultationsId = await Consulta.findByPk(id, {
            include: {
                model: Usuario,
                attributes: ["id", "admin", "visible", 'nombre', 'imagen', "email"]
            }
        })
        res.status(200).json(consultationsId)
    } catch (error) {
        res.status(404).json(error);
    }
})

module.exports = router;