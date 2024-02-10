export interface WorkExperienceInterface {
  companyName: string;
  role: string;
  timeline: string;
  work: string[];
  link: string;
}

const appfireFTEWorkExperience: WorkExperienceInterface = {
  companyName: 'Appfire',
  role: 'Associate Software Engineer',
  timeline: 'October 2023 - Present',
  work: [
    'Contributed to the development of frontend components by utilizing React and Atlaskit library to create user interfaces for cloud applications.',
    'Constructed backend functionality for cloud applications using the Atlassian Connect framework with Node.js and Express.js.',
    'Resolved critical bugs in a data center app, improving its stability and reliability.',
  ],
  link: 'https://appfire.com/',
};

const appfireInternWorkExperience: WorkExperienceInterface = {
  companyName: 'Appfire',
  role: 'Software Engineer Intern',
  timeline: 'July 2023 - September 2023',
  work: [
    'Contributed to the development of frontend components by utilizing React and Atlaskit library to create user interfaces for cloud applications.',
    'Constructed backend functionality for cloud applications using the Atlassian Connect framework with Node.js and Express.js.',
    'Resolved critical bugs in a data center app, improving its stability and reliability.',
  ],
  link: 'https://appfire.com/',
};

const techCuratorsWorkExperience: WorkExperienceInterface = {
  companyName: 'Techcurators',
  role: 'Problem Setter Intern',
  timeline: 'May 2022 - July 2022',
  work: [
    'Curated 50+ Data Structure and Algorithmic problems for upcoming programming contests and online assessments.',
    'Created test cases and tested the problems against them, drafted clear and concise editorials for the users.',
  ],
  link: 'https://www.techcurators.in/',
};

export const workExperiences: WorkExperienceInterface[] = [
  appfireFTEWorkExperience,
  appfireInternWorkExperience,
  techCuratorsWorkExperience,
];