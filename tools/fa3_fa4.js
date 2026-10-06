// FA3 and FA4 questions supplied by the user. The pasted "Correct answer"
// labels did not identify a choice, so answers follow the question content.
const fa3 = [
  {
    text: 'Which statement best describes Agile software development?',
    options: [
      'Development follows a fixed sequence with no changes',
      'Requirements and solutions evolve through collaboration',
      'Documentation must be completed before development begins',
      'Customers participate only after the product is completed'
    ],
    answer: ['B']
  },
  {
    text: 'Which of the following is one of the Agile Development Values?',
    options: [
      'Processes and tools over individuals and interactions',
      'Contract negotiation over customer collaboration',
      'Working software over comprehensive documentation',
      'Following a plan over responding to change'
    ],
    answer: ['C']
  },
  {
    text: 'According to Agile principles, what is the primary measure of progress?',
    options: ['Completed documentation', 'Working software', 'Number of meetings', 'Project budget'],
    answer: ['B']
  },
  {
    text: 'Which characteristic distinguishes Agile from the Waterfall model?',
    options: [
      'Agile follows only one development phase.',
      'Agile discourages customer involvement.',
      'Agile uses an incremental and iterative approach.',
      'Agile requires all requirements to remain unchanged.'
    ],
    answer: ['C']
  },
  {
    text: 'Agile encourages teams to respond to changing requirements:',
    options: ['Only before development starts', 'Only during planning', 'Even late in development', 'Never after requirements are approved'],
    answer: ['C']
  },
  {
    text: 'Which Agile methodology focuses primarily on people and their interactions rather than processes and tools?',
    options: ['DSDM', 'Crystal Methodology', 'FDD', 'Waterfall'],
    answer: ['B']
  },
  {
    text: 'Who developed the Crystal Methodology?',
    options: ['Kent Beck', 'Alistair Cockburn', 'Ken Schwaber', 'Mary Poppendieck'],
    answer: ['B']
  },
  {
    text: 'Which sequence correctly represents the three phases of Crystal Methodology?',
    options: ['Planning, Coding, Testing', 'Analysis, Design, Deployment', 'Chartering, Cyclic Delivery, Wrap Up', 'Feasibility, Development, Maintenance'],
    answer: ['C']
  },
  {
    text: 'Agile emphasizes individuals and interactions over processes and tools.',
    options: ['True', 'False'],
    answer: ['A']
  },
  {
    text: 'Agile considers comprehensive documentation more important than working software.',
    options: ['True', 'False'],
    answer: ['B']
  }
];

const fa4 = [
  {
    text: 'What is a model in systems development?',
    options: ['A complete copy of an existing system', 'A simplified description of a system', 'A collection of programming codes', 'A list of hardware components'],
    answer: ['B']
  },
  {
    text: 'What does systems modeling use to conceptualize and construct systems?',
    options: ['Models and diagrams', 'Programming languages only', 'Financial statements', 'Marketing plans'],
    answer: ['A']
  },
  {
    text: 'Which modeling approach represents the functions, activities, and operations within a system?',
    options: ['Enterprise modeling', 'Data modeling', 'Functional modeling', 'Financial modeling'],
    answer: ['C']
  },
  {
    text: 'In functional modeling, which element illustrates the transformation of input into output?',
    options: ['Process', 'Data store', 'External entity', 'Flow line'],
    answer: ['A']
  },
  {
    text: 'What does a Functional Flow Block Diagram primarily present?',
    options: ['Database table relationships', 'Time-sequenced functional activities', 'Hardware prices', 'Employee records'],
    answer: ['B']
  },
  {
    text: 'What is system architecture?',
    options: ['A list of users who can access a system', 'A conceptual model of a system’s structure and behavior', 'A financial plan for system development', 'A collection of programming errors'],
    answer: ['B']
  },
  {
    text: 'What is the primary purpose of Business Process Modeling?',
    options: ['To identify computer specifications', 'To represent, analyze, and improve organizational processes', 'To determine employee salaries', 'To install software applications'],
    answer: ['B']
  },
  {
    text: 'Which type of business process creates the organization’s primary value stream?',
    options: ['Management process', 'Supporting process', 'Operational process', 'Documentation process'],
    answer: ['C']
  },
  {
    text: 'Which of the following is an example of a supporting process?',
    options: ['Strategic management', 'Product manufacturing', 'Marketing and sales', 'Recruitment and technical support'],
    answer: ['D']
  },
  {
    text: 'What is the purpose of Business Process Model and Notation (BPMN)?',
    options: ['To provide a graphical notation for business processes', 'To identify computer hardware', 'To calculate software costs', 'To create database records'],
    answer: ['A']
  }
];

module.exports = { fa3, fa4 };
