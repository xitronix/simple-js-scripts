const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
const fs = require('fs');
const path = require('path');

const realPerson = {
  name: '',
  sayings: []
}

rl.question('What is the name of a real person? ', answer => {
  realPerson.name = answer;

  const stream = fs.createWriteStream(path.join(__dirname, realPerson.name + '.md'));
  stream.write(`${realPerson.name}\n===================\n\n`);

  rl.setPrompt(`What would ${realPerson.name} say? `);
  rl.prompt();
  rl.on('line', saying => {

    if (saying.toLowerCase().trim() === 'exit') {
      stream.close();
      rl.close();
    } else {
      realPerson.sayings.push(saying.trim());
      stream.write(`* ${saying.trim()} \n`);

      rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave) `);
      rl.prompt();
    }

  });

});

rl.on('close', () => {
  
  console.log('%s is a real person that says %j', realPerson.name, realPerson.sayings) //%j like json
  process.exit();

});