const { Router } = require('express');
const { Usuario } = require("../../db")
const router = Router();


// pedimos todos los usuarios
router.post('/', async (req, res) => {
    const { nombre, email, imagen, admin, visible } = req.body;
    console.log(nombre,email,imagen,admin,visible)
    try {
      const { nombre, email, imagen, admin, visible } = req.body;
      const usuario = await Usuario.create({ nombre, email, imagen, admin, visible });
      res.status(201).json(usuario);
    } catch (error) {
      console.error(error);
      res.status(500).send('Ha ocurrido un error al crear el usuario');
    }
  });

module.exports = router;