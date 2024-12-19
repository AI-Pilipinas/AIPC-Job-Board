import app from './server.js';
import fs from 'fs';
import https from 'https';
const port = process.env.PORT || 3001;
const secureport = process.env.SPORT || 3002;
//userdefined boolean
var sslSecure = false; //If we use NGINX we can disable this.s

if (sslSecure) {
  //Define your ssl key and certificate here
  const options = {
    key: fs.readFileSync("./ssl/cf_origin_key.pem"),
    cert: fs.readFileSync("./ssl/cf_origin_cert.pem")
  };
  //create server 
  var serverssl = https.createServer(options,app)
  serverssl.listen(secureport, () => {
    console.log(`[API] Secure server listening on port ${secureport}`)
  })
} else {
    app.listen(port, function() {
      console.log('[API] Server listening on port ' + port);
    });
}
if (app.get('env') === 'production') {
  console.log('Production MODE')
  app.set('trust proxy', 1); // trust first proxy
} else {
  console.log('DEVELOPER MODE test')
  app.set('trust proxy', 1); // trust first proxy
}
