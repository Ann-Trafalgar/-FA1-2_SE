const fs = require('fs');
const path = require('path');

const fa1 = [
  {
    text: 'Which best describes software?',
    options: [
      'Only the physical components of a computer',
      'A collection of computer programs, procedures, and documentation that perform tasks on a computer system',
      'A device used to store information',
      'A network connection between computers'
    ],
    answer: ['B']
  },
  {
    text: 'Which type of software is a collection of programs written to service other programs?',
    options: ['Application Software', 'Embedded Software', 'System Software', 'Product-line Software'],
    answer: ['C']
  },
  {
    text: 'Which software category usually consists of stand-alone programs that solve specific business needs?',
    options: ['Application Software', 'System Software', 'Engineering Software', 'Embedded Software'],
    answer: ['A']
  },
  {
    text: 'Which type of software resides within a product or system and implements control features?',
    options: ['Web Application', 'Embedded Software', 'Application Software', 'Product-line Software'],
    answer: ['B']
  },
  {
    text: 'What is a major characteristic of legacy software?',
    options: [
      'It was developed only for mobile devices.',
      'It cannot be modified.',
      'It consists of older programs developed decades ago.',
      'It is always inexpensive to maintain.'
    ],
    answer: ['C']
  },
  {
    text: 'Which is considered an “infant” software technology in the module?',
    options: ['Legacy Software', 'WebApps', 'System Software', 'Engineering Software'],
    answer: ['B']
  },
  {
    text: 'What does cloud computing enable users to do?',
    options: [
      'Use computing resources only from one location',
      'Share or use computing resources on a broad scale from anywhere or anytime',
      'Eliminate the need for computing devices',
      'Use only stand-alone applications'
    ],
    answer: ['B']
  },
  {
    text: 'Software engineering is best described as:',
    options: [
      'The physical repair of computer hardware',
      'A process, collection of methods, and tools for building high-quality computer software',
      'The process of purchasing computer programs',
      'The study of computer networks only'
    ],
    answer: ['B']
  },
  {
    text: 'Which two qualities are required in software engineering according to the module?',
    options: ['Speed and complexity', 'Adaptability and agility', 'Cost and size', 'Hardware and networking'],
    answer: ['B']
  },
  {
    text: 'What is the foundation of software engineering as a layered technology?',
    options: ['Tools', 'Methods', 'Process', 'Programming'],
    answer: ['C']
  }
];

const fa2 = [
  {
    text: 'Which statement best defines a project?',
    options: [
      'A permanent activity performed every day',
      'A temporary endeavor designed to produce a unique product or service',
      'A routine activity without a specific goal',
      'An activity with no beginning or end'
    ],
    answer: ['B']
  },
  {
    text: 'Which of the following is NOT considered a project?',
    options: [
      'Creating a unique software application',
      'Developing a new service',
      'Performing routine activities',
      'Constructing a new system'
    ],
    answer: ['C'],
    explanation: 'A project has a defined beginning and end and is undertaken to meet unique goals; routine activities are not considered projects.'
  },
  {
    text: 'Project management is the practice of:',
    options: [
      'Programming software only',
      'Initiating, planning, executing, controlling, and closing the work of a team',
      'Hiring employees only',
      'Performing routine activities without planning'
    ],
    answer: ['B']
  },
  {
    text: 'What is the primary challenge of project management?',
    options: [
      'Avoiding project documentation',
      'Increasing the number of team members',
      'Achieving project goals within given constraints',
      'Removing all project deadlines'
    ],
    answer: ['C'],
    explanation: 'Project management aims to achieve specific goals and success criteria within a specified time and given constraints.'
  },
  {
    text: 'Who is accountable for accomplishing the stated project objectives?',
    options: ['Customer', 'Project Manager', 'Programmer only', 'End user'],
    answer: ['B']
  },
  {
    text: 'Who is known as the father of planning and control techniques and is famous for the Gantt Chart?',
    options: ['Henri Fayol', 'Henry Gantt', 'Frederick Taylor', 'Robert Pressman'],
    answer: ['B'],
    explanation: 'The module identifies Henry Gantt and Henri Fayol as two forefathers of project management, with Henry Gantt associated with planning and control techniques and the Gantt Chart.'
  },
  {
    text: 'In the Gantt Chart shown in the module, the red marks indicate the:',
    options: [
      'Shortest task',
      'Completed tasks',
      'Critical path or longest stretch of the project',
      'Project budget'
    ],
    answer: ['C']
  },
  {
    text: 'What does PERT stand for?',
    options: [
      'Project Evaluation and Resource Tracking',
      'Program/Project Evaluation and Review Technique',
      'Planning, Execution, Review, and Testing',
      'Project Engineering and Research Technique'
    ],
    answer: ['B']
  },
  {
    text: 'What is a PERT Chart primarily used for?',
    options: [
      'Designing computer interfaces',
      'Scheduling, organizing, and coordinating project tasks',
      'Writing program code',
      'Creating financial statements'
    ],
    answer: ['B'],
    explanation: 'A PERT Chart analyzes project tasks and the time needed for each task to help identify the minimum time needed to complete the project.'
  },
  {
    text: 'What does “analysis” mean in system analysis?',
    options: [
      'Combining separate elements into a whole',
      'Breaking down a whole into parts',
      'Removing all system components',
      'Creating a final product immediately'
    ],
    answer: ['B']
  }
];

const questions = [
  ...fa1.map((question, index) => ({
    id: `se-fa1-${index + 1}`,
    number: index + 1,
    globalNumber: index + 1,
    assessment: 'FA1',
    category: 'FA1: Software Fundamentals',
    type: 'choice',
    ...question
  })),
  ...fa2.map((question, index) => ({
    id: `se-fa2-${index + 1}`,
    number: index + 1,
    globalNumber: fa1.length + index + 1,
    assessment: 'FA2',
    category: 'FA2: Projects and Project Management',
    type: 'choice',
    ...question
  }))
];

const root = path.resolve(__dirname, '..');
const json = JSON.stringify(questions, null, 2);
fs.writeFileSync(path.join(root, 'data', 'questions.json'), `${json}\n`, 'utf8');
fs.writeFileSync(path.join(root, 'data', 'questions.js'), `window.SE_QUESTIONS = ${json};\n`, 'utf8');
console.log(`Built ${questions.length} Software Engineering questions.`);
