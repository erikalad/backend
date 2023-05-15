const { Router } = require('express');
const { Carrito } = require("../../db")
const router = Router();


// pedimos todos los usuarios
router.delete("/:id", async (req, res, next) => {
    try {
        console.log("delete")
       
    } catch (error) {
        
    }
})

module.exports = router;