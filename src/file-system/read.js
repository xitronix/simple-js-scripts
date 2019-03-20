const fs = require('fs');
const path = require('path');


// ### SYNC

// const content = fs.readFileSync(`${__dirname}/fileToRead`, 'UTF-8'); //Without UTF-8 will be Buffer

// console.log(content);


// ### ASYNC

// fs.readFile(`${__dirname}/fileToRead`, 'UTF-8', (err, contents) => {

//   if (err)
//     console.log(err);

//     console.log(contents);

// });


// ### Read all files

fs.readdir(__dirname, (err, files) => {

  files.forEach(fileName => {
    const filePath = path.join(__dirname, fileName);
    const stats = fs.statSync(filePath);
    if (stats.isFile)
      fs.readFile(filePath, 'UTF-8', (err, contents) => {
        console.log(`\n\n${filePath}\n\n${contents}`);
      }); 
  });
});
