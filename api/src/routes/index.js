const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

//REQUIRE GET
const getCart = require("../controllers/Get/Get_id/GetCartId")
const getConsultation = require("../controllers/Get/GetConsultation")
const getOrders = require("../controllers/Get/GetOrders")
const getProcedure = require("../controllers/Get/GetProcedure")
const getProducts = require("../controllers/Get/GetProducts")
const getUsers = require("../controllers/Get/GetUsers")

//REQUIRE PUT
const putCart = require("../controllers/Put/PutCart")
const putConsultation = require("../controllers/Put/PutConsultation")
const putOrders = require("../controllers/Put/PutOrders")
const putProcedure = require("../controllers/Put/PutProcedure")
const putProducts = require("../controllers/Put/PutProducts")
const putUsers = require("../controllers/Put/PutUsers")

//REQUIRE POST
const postCart = require("../controllers/Post/PostCart")
const postConsultation = require("../controllers/Post/PostConsultation")
const postOrders = require("../controllers/Post/PostOrders")
const postProcedure = require("../controllers/Post/PostProcedure")
const postProducts = require("../controllers/Post/PostProducts")
const postUsers = require("../controllers/Post/PostUsers")

//REQUIRE DELETE
const deleteCart = require("../controllers/Delete/DeleteCart")
const deleteConsultation = require("../controllers/Delete/DeleteConsultation")
const deleteOrders = require("../controllers/Delete/DeleteOrders")
const deleteProcedure = require("../controllers/Delete/DeleteProcedure")
const deleteProducts = require("../controllers/Delete/DeleteProducts")
const deleteUsers = require("../controllers/Delete/DeleteUsers")



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//GET
router.use("/users", getUsers)
router.use("/products", getProducts)
router.use("/consultation", getConsultation)
router.use("/orders", getOrders)
router.use("/procedure", getProcedure)
router.use("/cart", getCart)

//POST
router.use("/users", postUsers)
router.use("/products", postProducts)
router.use("/consultation", postConsultation)
router.use("/orders", postOrders)
router.use("/procedure", postProcedure)
router.use("/cart", postCart)

//PUT
router.use("/users", putUsers)
router.use("/products", putProducts)
router.use("/consultation", putConsultation)
router.use("/orders", putOrders)
router.use("/procedure", putProcedure)
router.use("/cart", putCart)

//DELETE
router.use("/users", deleteUsers)
router.use("/products", deleteProducts)
router.use("/consultation", deleteConsultation)
router.use("/orders", deleteOrders)
router.use("/procedure", deleteProcedure)
router.use("/cart", deleteCart)



module.exports = router;
