export interface TechstackCardInterface {
  stackType: string;
  skills: string[];
}

const languages: TechstackCardInterface = {
  stackType: 'Languages',
  skills: [
    'C / C++',
    'Java',
    'Javascript',
    'Typescript',
    'SQL',
    'GraphQL',
    'HTML',
    'CSS',
  ],
};

const frameworks: TechstackCardInterface = {
  stackType: 'Frameworks',
  skills: [
    'React.js',
    'Next.js',
    'Tailwind',
    'Spring / Springboot',
    'Node.js',
    'Express.js',
  ],
};

const database: TechstackCardInterface = {
  stackType: 'Database',
  skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'DynamoDB'],
};

const tools: TechstackCardInterface = {
  stackType: 'Tools',
  skills: ['Git', 'Github', 'AWS', 'Cucumber.js'],
};

export const techStackCards: TechstackCardInterface[] = [
  languages,
  frameworks,
  database,
  tools,
];
