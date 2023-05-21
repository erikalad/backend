const { Router } = require('express');
const { Carrito, Usuario} = require("../../db")
const router = Router();


router.post('/', async (req, res) => {
    try {
      const { usuarioCartId, products } = req.body;
  
      const user = await Usuario.findByPk(usuarioCartId);
      if (!user) {
        return res.status(404).json({ message: 'El usuario no existe' });
      }

      if (!Array.isArray(products)) {
        return res.status(400).json({ message: 'Los productos deben estar en formato de array' });
      }
  
      const cart = await Carrito.create({
        usuarioCartId,
        products,
      });
  
      return res.status(200).send(cart);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error al agregar productos al carrito', error: error.message });
    }
  });
  
  module.exports = router;