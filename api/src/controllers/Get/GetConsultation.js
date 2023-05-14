const { Router } = require('express');
const { Consulta, Usuario } = require("../../db")
const router = Router();


router.get("/", async (req, res, next) => {
    try {
        const allConsultation = await Consulta.findAll({
            include: [{
                model: Usuario,
                attributes: ["id", "admin", "visible", 'nombre', 'imagen', "email"]
              }]
        })
        res.status(200).json(allConsultation)
       
    } catch (error) {
        next(error)
        res.status(404)
    }
})

module.exports = router;