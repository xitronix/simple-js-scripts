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

  // Sync because app has only one user
  fs.writeFileSync(path.join(__dirname, realPerson.name + '.md'), `${realPerson.name}\n===================\n\n`);

  rl.setPrompt(`What would ${realPerson.name} say? `);
  rl.prompt();
  rl.on('line', saying => {
    
    realPerson.sayings.push(saying.trim());
    fs.appendFile(path.join(__dirname, realPerson.name + '.md'), `* ${saying.trim()} \n`, err => { return err && console.log(err); });

    if (saying.toLowerCase().trim() === 'exit') {
      rl.close();
    } else {
      rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave) `);
      rl.prompt();
    }

  });

});

rl.on('close', () => {
  
  console.log('%s is a real person that says %j', realPerson.name, realPerson.sayings) //%j like json
  process.exit();

});