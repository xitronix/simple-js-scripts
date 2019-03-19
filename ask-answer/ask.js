const questions = require('./questions');

let answers = [];

const ask = (question) => {
  process.stdout.write(`\n${question}`);
  process.stdout.write('  >  ');
}


process.stdin.on('data', data => {

  answers.push(data.toString().trim());

  if (answers.length < questions.length)
    ask(questions[answers.length]);
  else
    process.exit();

});

process.on('exit', () => {
  process.stdout.write('\n\n');
  process.stdout.write(`Go ${answers[1]} ${answers[0]} you can finish wriiting ${answers[2]} later.`)
  process.stdout.write('\n\n');
})
// console.log(answers);
ask(questions[0]);