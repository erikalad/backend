const { DataTypes, UUID } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('usuario', {
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
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    imagen:{
        type: DataTypes.STRING,
        allowNull: false 
    },
    admin:{
        type: DataTypes.BOOLEAN,
        allowNull: false 
    },
    visible:{
        type: DataTypes.BOOLEAN,
        allowNull: false 
    }
  });
};
