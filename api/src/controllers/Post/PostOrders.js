const { Router } = require('express');
const { OrdenCompra } = require("../../db")
const router = Router();


// pedimos todos los usuarios
router.post("/", async (req, res) => {
    const { nombre, cantidad, total } = req.body;
    console.log(nombre,cantidad,total)
    try {
      const { nombre, cantidad, total } = req.body;
      const ordenCompra = await OrdenCompra.create({ nombre, cantidad, total });
      res.status(201).json(ordenCompra);
    } catch (error) {
      console.error(error);
      res.status(500).send('Ha ocurrido un error al crear la orden de compra');
    }
})

module.exports = router;