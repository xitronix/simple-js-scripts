const waitTime = 3000;
const waitInterval = 100;

let currentTime = 0;
let percentWaited = 0;

const writeWaitingPercent = p => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`Waiting [${'='.repeat(Math.floor(p/10))}${' '.repeat(Math.ceil((100-p)/10))}] ${p} %`);
}

const interval = setInterval(() => {
  currentTime += waitInterval;
  percentWaited = Math.floor((currentTime / waitTime) * 100);
  writeWaitingPercent(percentWaited);
}, waitInterval);

setTimeout(() => {
  clearInterval(interval);
  writeWaitingPercent(100);
  console.log('\n\nDone!');
}, waitTime);



