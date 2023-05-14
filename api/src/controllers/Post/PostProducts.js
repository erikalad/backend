const { Router } = require('express');
const { Producto } = require("../../db")
const router = Router();


// pedimos todos los usuarios
router.post("/", async (req, res) => {
    const { nombre, cantidad, imagen, precio } = req.body;
    console.log(nombre,cantidad,imagen,precio)
    try {
      const { nombre, cantidad, imagen, precio } = req.body;
      const producto = await Producto.create({ nombre, cantidad, imagen, precio });
      res.status(201).json(producto);
    } catch (error) {
      console.error(error);
      res.status(500).send('Ha ocurrido un error al crear el producto');
    }
  });

module.exports = router;