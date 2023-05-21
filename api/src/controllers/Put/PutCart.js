const { Router } = require('express');
const { Carrito } = require("../../db")
const router = Router();


// pedimos todos los usuarios
router.put("/", async (req, res, next) => {
    const { userId } = req.body;
    const product = req.body.products || [];
  
    try {
      // Se busca un carrito existente en la base de datos asociado al userId
      let cart = await Carrito.findOne({ where: { id: userId } });
  
      // Si no se encuentra un carrito, se crea uno nuevo con el userId
      if (!cart) {
        cart = await Carrito.create({ usuarioCartId: userId });
      }
  
      // Se busca si el producto ya existe en el carrito actual
      let productInCart = cart.products.filter(el => el.id === product.id)[0];
  
      // Si el producto ya está en el carrito, se actualiza su cantidad
      if (productInCart !== undefined) {
        productInCart = { id: productInCart.id, quantity: productInCart.quantity + product.quantity };
  
        // Se crea una nueva lista de productos excluyendo el producto existente y agregando el producto actualizado
        let newProducts = cart.products.filter(el => el.id !== productInCart.id);
        newProducts = newProducts.concat(productInCart);
  
        // Se ordena la lista de productos por el id
        newProducts.sort((a, b) => a.id - b.id);
  
        // Se actualiza el carrito en la base de datos con la nueva lista de productos
        await cart.update({ products: newProducts });
      } else {
        // Si el producto no está en el carrito, se agrega a la lista de productos
        let newProducts = cart.products.concat(product);
  
        // Se ordena la lista de productos por el id
        newProducts.sort((a, b) => a.id - b.id);
  
        // Se actualiza el carrito en la base de datos con la nueva lista de productos
        await cart.update({ products: newProducts });
      }
  
      // Se envía la respuesta con el carrito actualizado
      res.status(200).send(cart);
    } catch (error) {
      // Si ocurre un error, se envía una respuesta de error
      res.status(400).send(error);
    }
  });

module.exports = router;