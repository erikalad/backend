const { Router } = require('express');
const {Consulta} = require("../../db")
const router = Router();

router.post("/", async(req, res, next)=>{
    const { dia, hora, usuarioId } = req.body
    try {
        const consultation = await Consulta.create({
            dia,
            hora,
            usuarioId,
            
        })
        res.status(200).send(consultation)
    } catch (error) {
        next(error)
        res.status(404)
    }
})

module.exports = router;