const {Carrito, Usuario, Consulta, Tramite, Producto} = require("../db.js");


 async function UploaderUsers (){
    try{
         const allUsers = [
            {
              admin: true,
              visible: true,
              nombre: "Juan Perez",
              imagen: "url-imagen1",
              email: "juan.perez@example.com"
            },
            {
              
              admin: false,
              visible: true,
              nombre: "Maria Gomez",
              imagen: "url-imagen2",
              email: "maria.gomez@example.com"
            },
            {
            
              admin: false,
              visible: false,
              nombre: "Pedro Rodriguez",
              imagen: "url-imagen3",
              email: "pedro.rodriguez@example.com"
            },
            {
              
              admin: true,
              visible: true,
              nombre: "Lucia Fernandez",
              imagen: "url-imagen4",
              email: "lucia.fernandez@example.com"
            },
            {
              
              admin: false,
              visible: true,
              nombre: "Sofia Garcia",
              imagen: "url-imagen5",
              email: "sofia.garcia@example.com"
            }
          ];

        await Usuario.bulkCreate(allUsers)
        console.log("Base de datos de usuarios hardcodeados, cargada correctamente") 

    } catch(error) {
        console.log(error)
    }}

   async function UploaderConsultation (){
    try{


         const allConsultations = [
        {
          "dia": "2023-05-15",
          "hora": "15:30",
        },
        {
          "dia": "2023-05-15",
          "hora": "16:15",
        },
        {
          "dia": "2023-05-16",
          "hora": "10:45",
        },
        {
          "dia": "2023-05-16",
          "hora": "14:20",
        },
        {
          "dia": "2023-05-17",
          "hora": "11:00",
        }
      ]  
       

        await Consulta.bulkCreate(allConsultations)
        console.log("Base de datos de consultas asignadas a usuarios hardcodeadas, cargada correctamente") 

    } catch(error) {
        console.log(error)
    }} 
 

    async function UploaderProcedures (){
      try{
        const allProcedures = [
          {
            estado: 'PENDIENTE',
            documentacion: 'APROBADO',
            informacion: 'texto-ejemplo1'
          },
          {
            estado: 'APROBADO',
            documentacion: 'RECHAZADO',
            informacion: 'texto-ejemplo2'
          },
          {
            estado: 'CANCELADO',
            documentacion: 'CANCELADO',
            informacion: 'texto-ejemplo3'
          }
        ];
        

          await Tramite.bulkCreate(allProcedures)
          console.log("Base de datos de tramites hardcodeadas, cargada correctamente") 
  
      } catch(error) {
          console.log(error)
      }} 

      async function UploaderProducts (){
        try{
    
    
             const allProduts = [
              {
                "nombre": "Producto 1",
                "cantidad": 10,
                "imagen": "imagen1.jpg",
                "precio": 100
              },
              {
                "nombre": "Producto 2",
                "cantidad": 5,
                "imagen": "imagen2.jpg",
                "precio": 50
              },
              {
                "nombre": "Producto 3",
                "cantidad": 8,
                "imagen": "imagen3.jpg",
                "precio": 80
              }
          ]  
           
    
            await Producto.bulkCreate(allProduts)
            console.log("Base de datos de productos hardcodeados, cargada correctamente") 
    
        } catch(error) {
            console.log("error", error.message)
        }} 
    
module.exports = {
    UploaderUsers,
    UploaderProcedures,
    UploaderConsultation,
    UploaderProducts,
    
}





const cartInfo = [
    { nombre: "Producto 1", cantidad: 2, precio: 10 },
    { nombre: "Producto 2", cantidad: 1, precio: 15 },
    { nombre: "Producto 3", cantidad: 3, precio: 8 },
    { nombre: "Producto 4", cantidad: 1, precio: 20 },
    { nombre: "Producto 5", cantidad: 2, precio: 12 },
    { nombre: "Producto 6", cantidad: 2, precio: 9 },
    { nombre: "Producto 7", cantidad: 1, precio: 25 },
    { nombre: "Producto 8", cantidad: 4, precio: 6 },
    { nombre: "Producto 9", cantidad: 1, precio: 18 },
    { nombre: "Producto 10", cantidad: 3, precio: 11 }
  ];

const allConsultations = [
    {
      id: 1,
      fecha: "2022-01-05",
      hora: "10:30"
    },
    {
      id: 2,
      fecha: "2022-01-08",
      hora: "11:15"
    },
    {
      id: 3,
      fecha: "2022-01-10",
      hora: "09:45"
    },
    {
      id: 4,
      fecha: "2022-01-15",
      hora: "14:00"
    },
    {
      id: 5,
      fecha: "2022-01-20",
      hora: "16:30"
    }
  ];