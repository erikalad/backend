const { Router } = require('express');
const { Consulta } = require("../../db")
const router = Router();


// pedimos todos los usuarios
router.put("/:id", async (req, res, next) => {
    try {
        const consultation = await Consulta.findByPk(req.params.id);
        if (consultation) {
            await Consulta.update({
              dia: req.body.dia,
              hora: req.body.hora,
            },
            {
              where: { id: req.params.id }, // Condición para actualizar el registro específico
            });
        
            res.status(200).send("Consulta actualizada actualizada");
           
           
          } else {
            res.status(404).send("No se encontro la consulta el id especificado.");
          }
    
       
      } catch (error) {
        next(error);
        res.status(404);
      }
    });

module.exports = router;