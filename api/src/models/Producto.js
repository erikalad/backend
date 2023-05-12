const { DataTypes, UUID ,NUMBER} = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('producto', {
    id:{
        type: DataTypes.UUID,      
        defaultValue: DataTypes.UUIDV4,    
        allowNull: false,
        primaryKey : true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cantidad:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    imagen:{
        type: DataTypes.STRING,
        allowNull: false 
    },
    precio:{
        type: DataTypes.INTEGER,
        allowNull: false 
    },
    
  });
};
