const {Carrito} = require("../db.js")


 async function UploaderInfo (){
    try{
        let cartInfo

        await Carrito.bulkCreate(countriesMap)
        console.log("Base de datos hardcodeada, cargada correctamente") 

    } catch(error) {
        console.log(error)
    }}


    
module.exports = {
    UploaderInfo,
}