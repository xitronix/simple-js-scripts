const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'lib');


if (fs.existsSync(dirPath))
  console.log('Directory already there');
else
  fs.mkdir(path.join(__dirname, 'lib'), err => {

    if (err) {
      console.log(err);
    } else {
      console.log('Directory Created');
    }

  });
