const { Router } = require('express');
const { Usuario } = require("../../db")
const router = Router();


router.get("/", async (req, res, next) => {
    try {
        const allUsers = await Usuario.findAll()
        res.status(200).json(allUsers)
       
    } catch (error) {
        next(error)
        res.status(404)
    }
})

module.exports = router;