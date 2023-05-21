const { Router } = require('express');
const { Tramite } = require("../../db")
const router = Router();


// pedimos todos los usuarios
router.put("/:id", async (req, res, next) => {
    try {
        const procedure = await Tramite.findByPk(req.params.id);
        if (procedure) {
            await Tramite.update({
              estado: req.body.estado,
              documentacion: req.body.documentacion,
              informacion: req.body.informacion,

            },
            {
              where: { id: req.params.id }, // Condición para actualizar el registro específico
            });
        
/*             res.status(200).send(`Tramite actualizado ${JSON.stringify(Tramite)}`);
 */            res.status(200).send("Tramite actualizado");

           
          } else {
            res.status(404).send("No se encontro el tramite con el id especificado.");
          }       
      } catch (error) {
        next(error);
        res.status(404);
      }
    });

module.exports = router;