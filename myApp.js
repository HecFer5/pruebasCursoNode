require('dotenv').config()
let express = require('express');
let app = express();
  
let mensaje =""
    if (process.secrets.MESSAGE_STYLE === "uppercase") {
      mensaje = "Hello World".toUpperCase();
    } else {
      mensaje = "Hello World";
    }

    app.get("/", function (req, res) {
   
        res.json( mensaje)
    })
 
console.log(mensaje)
  
    
   