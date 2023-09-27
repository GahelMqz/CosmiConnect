import express from 'express';

import mysql from 'mysql';

//crear la instancia express

const app=express();

//crear la conexion a la base de datos

const conexion=mysql.createConnection({
    server:'localhost',
    user:'root',
    password:'',
    database:'cosmicconnect' // nombre de la base de datos 
});

//verificamos las conexiones

conexion.connect(function(error){
    if(error){
        console.log("Error al conectar a la base de datos")
    } else {
        console.log("Conectado exitosamente");
    }
});

// Iniciamos el servidor

app.listen(8081,()=>{
    console.log("servidor iniciado");
});