'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const request = require("request");

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

    request({
  uri: "http://test-web.nunchee.com/nunchee/api/1.0/users/login_frontend",
  method: "POST",
  form: {
    username: 'sbtv_test',
    password: 'sbtv_2015'
  }
}, function(error, response, body) {
  //console.log(response.statusCode);
  if(response.statusCode == 200)
  {
      let respuesta = {status: 'ok', message:'inicio de sesión correcto'}
      console.log(JSON.stringify(respuesta)) 
  }
  else if(response.statusCode == 403)
  {
      let respuesta = {status: 'ok', message:'No autorizado'}
      console.log(JSON.stringify(respuesta))
  }
  else if(response.statusCode == 404)
  {
      let respuesta = {status: 'ok', message:'Problemas al realizar el inicio de sesión'}
      console.log(JSON.stringify(respuesta))
  }
  else if(response.statusCode == 501)
  {
      let respuesta = {status: 'ok', message:'Problemas internos del servidor'}
      console.log(JSON.stringify(respuesta))
  }
  else if(response.statusCode == 502)
  {
      let respuesta = {status: 'ok', message:'Colapso del servidor'}
      console.log(JSON.stringify(respuesta))
  }
  else if(response.statusCode == 503)
  {
      let respuesta = {status: 'error', message:'Bad Request'}
      console.log(JSON.stringify(respuesta))
  }
});


app.listen(port, () =>{
    console.log(`API corriendo en ${port}`)
});