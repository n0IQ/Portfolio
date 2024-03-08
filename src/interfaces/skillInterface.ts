export interface SkillInterface {
  stackType: string;
  desciption: string;
  skills: { name: string; image: string }[];
}

export const languages: SkillInterface = {
  stackType: 'Languages',
  desciption: "Programming Languages that I'm familiar with",
  skills: [
    { name: 'C / C++', image: '/images/skills/cpp.png' },
    { name: 'Java', image: '/images/skills/java.png' },
    { name: 'Javascript', image: '/images/skills/js.png' },
    { name: 'Typescript', image: '/images/skills/ts.png' },
    { name: 'SQL', image: '/images/skills/sql.png' },
    { name: 'GraphQL', image: '/images/skills/graphql.svg' },
  ],
};

export const frameworks: SkillInterface = {
  stackType: 'Libraries and Frameworks',
  desciption:
    "Libraries and frameworks that I've used in my projects and work.",
  skills: [
    { name: 'React.js', image: '/images/skills/react.svg' },
    { name: 'Next.js', image: '/images/skills/nextjs.svg' },
    { name: 'Tailwind CSS', image: '/images/skills/tailwindcss.svg' },
    { name: 'Spring / Springboot', image: '/images/skills/spring.svg' },
    { name: 'JDBC', image: '/images/skills/jdbc.svg' },
    { name: 'Hibernate / JPA', image: '/images/skills/hibernate.svg' },
    { name: 'Node.js', image: '/images/skills/nodejs.png' },
    { name: 'Express.js', image: '/images/skills/expressjs.svg' },
  ],
};

export const databases: SkillInterface = {
  stackType: 'Databases',
  desciption: "Databases that I've used and am familiar with.",
  skills: [
    { name: 'MongoDB', image: '/images/skills/mongodb.svg' },
    { name: 'MySQL', image: '/images/skills/mysql.svg' },
    { name: 'PostgreSQL', image: '/images/skills/postgresql.svg' },
    { name: 'DynamoDB', image: '/images/skills/dynamodb.svg' },
  ],
};

export const tools: SkillInterface = {
  stackType: 'Tools',
  desciption: "Tools that I've used at my work and personal projects.",
  skills: [
    { name: 'Git', image: '/images/skills/git.svg' },
    { name: 'Github', image: '/images/skills/github.svg' },
    { name: 'Bitbucket', image: '/images/skills/bitbucket.svg' },
    { name: 'AWS', image: '/images/skills/aws.svg' },
    { name: 'Cucumber.js / Gherkin', image: '/images/skills/cucumber.svg' },
    { name: 'Selenium Webdriver JS', image: '/images/skills/selenium.svg' },
  ],
};

export const skills: SkillInterface[] = [
  languages,
  frameworks,
  databases,
  tools,
];
