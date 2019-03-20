const fs = require('fs');
const path = require('path');

const md = `

Sample Markdown Title
=====================

Sample Subtitle
---------------

* point
* point 

`;

fs.writeFile(path.join(__dirname, 'sample.md'), md.trim(), err => console.log('File Created'));