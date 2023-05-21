const { DataTypes, UUID,NUMBER } = require('sequelize');
const { Usuario } = require("../db")

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('carrito', {
    id:{
      type: DataTypes.UUID,      
      defaultValue: DataTypes.UUIDV4,    
      allowNull: false,
      primaryKey : true
  },

     usuarioCartId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Usuario,
        key: 'id'
      }
    }, 

    products: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: false,
      defaultValue: []
  },
   
    
  });
};
