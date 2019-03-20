const sayings = [
  'You may delay, but the time not',
  'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
  'Well done is better than well said.'
] 

var interval = setInterval(() => {
  const i = Math.floor(Math.random() * sayings.length);
  process.stdout.write(`${sayings[i]} \n`);
}, 1000);

process.stdin.on('data', data => {
  console.log(`STDIN Data Recieved -> ${data.toString().trim()}`);
  clearInterval(interval);
  process.exit();
});