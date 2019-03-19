const exec = require('child_process').exec;

exec('xdg-open https://nodejs.org');

exec('ls', (err, stdout) => {
  if (err)
    throw err;

  console.log('Listing finished');
  console.log(stdout);

});