const { Router } = require('express');
const { Carrito, Usuario, Producto } = require("../../../db")
const router = Router();


router.get("/:carritoId", async (req, res) => {
  try {
    const { carritoId } = req.params;

    let carrito = await Carrito.findByPk(carritoId, {
      include: [
        {
          model: Usuario,
          attributes: ["id", "admin", "visible", "nombre", "imagen", "email"]
        },
        {
          model: Producto,
          attributes: ["id", "nombre", "imagen", "precio", "cantidad"]
        }
      ]
    });

    if (!carrito) {
      // Crear un carrito vacío si no existe
      carrito = await Carrito.create({ id: carritoId, products: [] });

      // Obtener los productos completos (en este caso no habrá productos)
      const productosCompletos = [];

      // Actualizar los productos del carrito con los productos completos
      carrito.products = productosCompletos;
    } else {
      // Obtener los IDs de los productos del carrito
      const productIds = carrito.products.map(product => product.id);

      // Obtener los productos completos utilizando los IDs
      const productos = await Producto.findAll({
        where: {
          id: productIds
        }
      });

      // Mapear los productos completos al carrito
      const productosCompletos = carrito.products.map(product => {
        const productoCompleto = productos.find(p => p.id === product.id);
        return {
          ...product,
          ...productoCompleto.toJSON()
        };
      });

      // Actualizar los productos del carrito con los productos completos
      carrito.products = productosCompletos;
    }

    res.status(200).json(carrito);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los productos del carrito" });
  }
});


module.exports = router;