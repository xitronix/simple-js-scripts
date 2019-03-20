const fs = require('fs');

// ### SYNC 

// const files = fs.readdirSync('./src');
// console.log(files);


// ### ASYNC

fs.readdir('./src', (err, files) => {

  if (err)
    throw err;

  console.log(files);

});

console.log('Reading files..');