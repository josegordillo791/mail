

var nodemailer = require('nodemailer');
const http = require('http');


const server=http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
});

server.listen(3003);

console.log('SERVIDOR ARRIBA');



var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'josegordillo791@gmail.com',
    pass: 'emrmdpybffnzlyqv'
  }
});

var mailOptions = {
  from: 'josegordillo791@gmail.com',
  to: 'josegordilloute@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});