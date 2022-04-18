

var nodemailer = require('nodemailer');
const http = require('http');


const server=http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
});

server.listen(3003);

console.log('SERVIDOR ARRIBA');
/*

PARA CREAR CONTRASEÑA DE APLICACION : 

Ve a tu cuenta de Google.
Selecciona Seguridad.
En "Iniciar sesión en Google", selecciona Contraseñas de aplicación. ...
En la parte inferior, elige Seleccionar aplicación y elige la aplicación que utilizas Seleccionar dispositivo y elige el dispositivo que utilizas.

*/


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tu correo',
    pass: 'tu password' // CONTRASEÑA EXPLICADA ARRIBA
  }
});

var mailOptions = {
  from: 'tu mail',
  to: 'a que mail va dirigido',
  subject: 'acerca de que va dirigido el mail',
  text: 'texto del correo'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
