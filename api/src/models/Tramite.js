const { DataTypes, UUID } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('tramite', {
    id:{
        type: DataTypes.UUID,      
        defaultValue: DataTypes.UUIDV4,    
        allowNull: false,
        primaryKey : true
    },
    estado:{
        type: DataTypes.ENUM('PENDIENTE','APROBADO','RECHAZADO','CANCELADO'),
        allowNull: false
    },
    documentacion:{
        type: DataTypes.ENUM('PENDIENTE','APROBADO','RECHAZADO','CANCELADO'),
        allowNull: false
    },
    informacion:{
        type: DataTypes.TEXT,
        allowNull: false 
    },
    
  });
};