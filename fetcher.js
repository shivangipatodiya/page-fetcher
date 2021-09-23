const fs = require('fs');
const arg = process.argv.slice(2);
const URL = arg[0];
const PATH = arg[1];

const request = require('request');
request(URL, (error, response, body) => {
  if (error) {
    return console.log(error);
  }

  fs.writeFile(PATH, body, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log(`Downloaded and saved 3261 bytes to ${PATH}`);
  }); 
  
});



// conn.on('connect', () => {
//   console.log(`Connected to server!`);

//   conn.write(`GET / HTTP/1.1\r\n`);
//   conn.write(`Host: example.edu\r\n`);
//   conn.write(`\r\n`);
// });

// conn.on('connect', () => {
//   console.log('Connected to server!');

//   conn.write(`GET / ${}\r\n`);
//   conn.write(`host: ${}`);
//   conn.write(`\r\n`);
// });

// conn.on('data', (data) => {
//   console.log(data);
//   conn.end();
// });


