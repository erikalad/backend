const { Router } = require('express');
const { Consulta } = require("../../db")
const router = Router();


// pedimos todos los usuarios
router.get("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const allConsultationId = Consulta.findByPk(id, {
            include: [{
                model: Usuario,
                attributes: ['nombre', 'imagen', "email"]
              }]
        })
        res.status(200).json(allConsultationId)
       
    } catch (error) {
        res.status(404).json(error);

    }
})

module.exports = router;