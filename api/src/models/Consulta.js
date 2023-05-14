const { DataTypes, UUID } = require('sequelize');
const { Usuario } = require("../db")

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('consulta', {
    id:{
        type: DataTypes.UUID,      
        defaultValue: DataTypes.UUIDV4,    
        allowNull: false,
        primaryKey : true
    },
    usuarioId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: Usuario,
          key: 'id'
        }
      },
    dia:{
        type: DataTypes.STRING,
        allowNull: false
    },
    hora:{
        type: DataTypes.STRING,
        allowNull: false
    },
  
    });
};