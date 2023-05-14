const { Router } = require('express');
const { Tramite, Usuario } = require("../../db")
const router = Router();


// pedimos todos los usuarios
router.get("/", async (req, res, next) => {
    try {
        const allProcedure = Tramite.findAll({
            include: [{
                model: Usuario,
                attributes: ["id", "admin", "visible", 'nombre', 'imagen', "email"]
              }]
        })
        res.status(200).json(allProcedure)
       
    } catch (error) {
        next(error)
        res.status(404)
    }
})

module.exports = router;