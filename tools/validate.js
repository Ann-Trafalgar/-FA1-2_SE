const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const questions = JSON.parse(fs.readFileSync(path.join(root, 'data', 'questions.json'), 'utf8'));
const failures = [];
const assert = (condition, message) => { if (!condition) failures.push(message); };

assert(questions.length === 40, `Expected 40 questions, found ${questions.length}`);
assert(new Set(questions.map(question => question.id)).size === 40, 'Question IDs are not unique');
for (const assessment of ['FA1', 'FA2', 'FA3', 'FA4']) {
  const items = questions.filter(question => question.assessment === assessment);
  assert(items.length === 10, `${assessment} should contain 10 questions`);
  assert(items.every((question, index) => question.number === index + 1), `${assessment} numbering is not sequential`);
}

for (const question of questions) {
  assert(question.text?.trim(), `${question.id} has no text`);
  const expectedOptions = ['se-fa3-9', 'se-fa3-10'].includes(question.id) ? 2 : 4;
  assert(question.options?.length === expectedOptions, `${question.id} should have ${expectedOptions} options`);
  assert(question.answer?.length === 1, `${question.id} should have one answer`);
  const answerIndex = question.answer[0]?.charCodeAt(0) - 65;
  assert(answerIndex >= 0 && answerIndex < question.options.length, `${question.id} has an invalid answer`);
  assert(!question.text.includes('\n'), `${question.id} contains a PDF line-wrap artifact`);
}
assert(questions.every((question, index) => question.globalNumber === index + 1), 'Combined question numbering is not sequential');
assert(new Set(questions.map(question => question.text.toLowerCase())).size === 40, 'Question prompts are duplicated');

const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const app = fs.readFileSync(path.join(root, 'assets', 'app.js'), 'utf8');
const htmlIds = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]));
const requestedIds = new Set([...app.matchAll(/\$\('([^']+)'\)/g)].map(match => match[1]));
for (const id of requestedIds) assert(htmlIds.has(id), `app.js requests missing HTML id #${id}`);

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log('Validated 40 questions, FA1-FA4 grouping, answers, formatting, and all DOM references.');
