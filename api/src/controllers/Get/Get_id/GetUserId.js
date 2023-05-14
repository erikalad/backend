const { Router } = require('express');
const { Usuario } = require("../../../db")
const router = Router();

router.get("/:id", async (req, res) => {
    const { id } = req.params
    const userId = await Usuario.findByPk(id)
    console.log(userId)
    try {
        if (userId !== null) {
            const userById = await Usuario.findOne({
                where: {
                    id: id,
                   }
            })

            res.status(200).send(userById)
        } else res.status(404).send("El Usuario que quiere ver NO existe")
    } catch (error) {
        res.status(404)
    }
})

module.exports = router