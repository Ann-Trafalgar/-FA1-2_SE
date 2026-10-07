// Questions transcribed from walalang.txt. The source provides only correct
// multiple-choice answers; the other options below were written for this quiz.
(() => {
  const choiceRows = [
    ['Which statement best defines software?', 'A computer and its physical peripherals', 'A collection of programs, procedures, data structures, and documentation', 'Only executable program files', 'A network of connected devices', 'B'],
    ['Which software category consists of stand-alone programs that solve specific business needs?', 'System software', 'Application software', 'Embedded software', 'Engineering software', 'B'],
    ['Which framework activity involves creating a sketch of the project to understand the big picture?', 'Communication', 'Modeling', 'Planning', 'Deployment', 'B'],
    ['Which type of system produces results that cannot be predicted with certainty?', 'Closed or deterministic system', 'Open or probabilistic system', 'Static system', 'Isolated system', 'B'],
    ['Which information-system activity transforms raw data into a useful form?', 'Input', 'Process', 'Output', 'Feedback', 'B'],
    ['Which information system handles routine transactions such as payroll and sales-order entry?', 'DSS', 'MIS', 'TPS', 'ESS', 'C'],
    ['Which information system commonly uses internal and external data to assist decision-makers with non-routine problems?', 'Decision Support System', 'Transaction Processing System', 'Office Automation System', 'Management Information System', 'A'],
    ['Which SDLC phase first determines whether a new system is needed and examines feasibility?', 'Planning', 'System Design', 'Implementation', 'Maintenance', 'A'],
    ['During which SDLC phase are functional requirements and stakeholder needs primarily gathered and studied?', 'System Analysis', 'System Testing', 'Implementation', 'Maintenance', 'A'],
    ['Verification and validation are emphasized in which SDLC phase?', 'Planning', 'System Design', 'System Testing', 'Deployment', 'C'],
    ['Which statement best describes a project?', 'A permanent set of routine operations', 'A temporary endeavor that creates a unique product or service', 'Any recurring business activity', 'An activity without a defined outcome', 'B'],
    ['Which chart displays project tasks against time using horizontal bars?', 'PERT chart', 'Gantt chart', 'Flowchart', 'Organizational chart', 'B'],
    ['Which project-management tool focuses on task dependencies and the minimum time needed to complete a project?', 'Gantt chart', 'PERT chart', 'Use-case diagram', 'Data flow diagram', 'B'],
    ['In the Four Ps approach, which P refers to authority, decision-makers, organizational charts, and policies?', 'People', 'Product', 'Process', 'Power', 'D'],
    ['Which project-management phase regularly measures performance, identifies variances, and enables corrective action?', 'Initiating', 'Executing', 'Monitoring and Controlling', 'Closing', 'C'],
    ['Which systems-analysis step determines the conditions or capabilities the proposed system must satisfy?', 'Feasibility analysis', 'Data modeling', 'Requirements analysis', 'System deployment', 'C'],
    ['Which Agile value gives greater emphasis to a usable product than to extensive documentation?', 'Processes and tools over individuals and interactions', 'Working software over comprehensive documentation', 'Contract negotiation over customer collaboration', 'Following a plan over responding to change', 'B'],
    ['Who prioritizes the product backlog and represents stakeholder interests in Scrum?', 'Scrum Master', 'Product Owner', 'Development Team', 'Project sponsor', 'B'],
    ['Which Scrum event is limited to 15 minutes and occurs at the same time and place each day?', 'Sprint Review', 'Sprint Retrospective', 'Daily Scrum', 'Sprint Planning', 'C'],
    ["Which DSDM technique classifies requirements as Must have, Should have, Could have, and Won't have?", 'Timeboxing', 'MoSCoW', 'Story mapping', 'Planning poker', 'B'],
    ['Which Agile method focuses on designing and building features through specific, short phases?', 'Crystal', 'Feature Driven Development', 'Scrum', 'Lean Software Development', 'B'],
    ['In a data flow diagram, which symbol represents the movement of data between elements?', 'Rectangle or external entity', 'Arrow or flow line', 'Open-ended rectangle or data store', 'Circle or process', 'B'],
    ['What does a data store represent in a DFD?', 'A person outside the system', 'A transformation of input data', 'A location where information is stored temporarily or permanently', 'The direction of data movement', 'C'],
    ['Which business process creates the primary value stream through activities such as purchasing, manufacturing, marketing, and sales?', 'Management process', 'Operational process', 'Supporting process', 'Audit process', 'B'],
    ['Which fact-finding technique is most suitable for collecting standardized responses from a large group?', 'Interview', 'Observation', 'Questionnaire', 'Prototype', 'C']
  ];
  const trueFalseRows = [
    ['Legacy software is often continually modified to meet changing business needs and may be costly to maintain.', true],
    ['A closed system produces outputs that can only be guessed and cannot be predicted with certainty.', false],
    ['In an information system, feedback refers to evaluating the output or results.', true],
    ['SDLC documentation is usually performed only after the system has been implemented.', false],
    ['System maintenance may require developers to revisit earlier SDLC phases when updates are needed.', true],
    ['Routine, repetitive operational work is always considered a project.', false],
    ['Project closing includes formal acceptance, archiving documents, and settling applicable contracts.', true],
    ['Analysis combines separate elements to form a coherent whole, while synthesis breaks a whole into parts.', false],
    ['Agile welcomes changing requirements, even late in development.', true],
    ['In Scrum, incomplete work may be demonstrated during the Sprint Review.', false],
    ['Crystal emphasizes people and their interactions more than processes and tools.', true],
    ['In DSDM timeboxing, time and budget are fixed while lower-priority requirements may be omitted.', true],
    ['Lean Software Development treats unnecessary features and abandoned partially completed code as waste.', true],
    ['A DFD should mix several levels of detail on one chart to minimize the number of diagrams.', false],
    ["Open-ended questionnaires generally produce qualitative responses written in the respondents' own words.", true]
  ];
  const identificationRows = [
    ['The seven-phase process used to plan, create, test, deploy, and maintain an information system.', ['Systems Development Life Cycle', 'Software Development Life Cycle']],
    ['A system that provides routine information to managers and supports areas such as marketing, production, and finance.', ['Management Information System']],
    ['A temporary endeavor undertaken to create a unique product or service.', ['Project']],
    ['The procedure of breaking an intellectual or substantial whole into parts for study.', ['Analysis']],
    ['The Scrum facilitator who enforces Scrum rules, removes impediments, and coaches the team.', ['Scrum Master']],
    ['A fixed-length Scrum development period, commonly lasting two weeks.', ['Sprint']],
    ['The Agile approach developed by Alistair Cockburn that emphasizes people and communication.', ['Crystal']],
    ['A graphical notation used to specify business processes in a Business Process Diagram.', ['Business Process Model and Notation']],
    ['A graphical illustration showing the flow of data and logic within a system.', ['Data Flow Diagram']],
    ['An advanced fact-finding technique that obtains information from published materials or documents to verify facts.', ['Record review', 'Document review', 'Document analysis']]
  ];
  const make = (number, type, text, fields) => ({
    id: `walalang-${number}`, number, globalNumber: number,
    assessment: 'WALALANG', category: 'walalang.txt', type, text, ...fields
  });
  window.WALALANG_QUESTIONS = [
    ...choiceRows.map(([text, ...rest], index) => make(index + 1, 'choice', text, {
      options: rest.slice(0, 4), answer: [rest[4]]
    })),
    ...trueFalseRows.map(([text, correct], index) => make(index + 26, 'choice', text, {
      options: ['True', 'False'], answer: [correct ? 'A' : 'B']
    })),
    ...identificationRows.map(([text, acceptedAnswers], index) => make(index + 41, 'identification', text, {
      acceptedAnswers
    }))
  ];
})();
