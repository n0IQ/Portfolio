export interface ProjectCardInterface {
  id: number;
  title: string;
  description: string;
  coverDescription: string;
  githubLink: string;
  youtubeLink: string;
  projectLink: string;
  technologies: string;
  images: string[];
}

export const codeNitrixProject: ProjectCardInterface = {
  id: 1,
  title: 'CodeNitrix - A Coding Assessment Platform',
  description: `CodeNitrix is an innovative online coding assessment platform that streamlines the hiring process for companies. 
  With our user-friendly interface, companies can easily create and host their own coding tests, customizing questions and setting the 
  desired duration. Upon login, candidates receive a unique password from the hosting company to access the test. Our platform supports coding 
  in Javascript, while our scoring system evaluates solutions based on correctness, awarding points accordingly. Simplify your hiring process 
  and discover top coding talent with CodeNitrix.`,
  coverDescription: `
  CodeNitrix is a comprehensive online coding assessment platform designed to simplify the hiring process for companies. 
  It offers a user-friendly interface for companies to create and customize coding tests, set specific questions, and define time limits. 
  Candidates gain access to these tests through secure passwords provided by the hosting company. With support for JavaScript, engineers 
  can showcase their coding skills, earning points based on the accuracy of their solutions. CodeNitrix streamlines the assessment process, 
  providing a seamless experience for both companies and candidates alike.`,
  githubLink: 'https://github.com/n0IQ/CodeNitrix-Backend',
  youtubeLink: '',
  projectLink: 'https://code-nitrix-frontend.vercel.app/',
  technologies:
    'React, JavaScript, Node.js, Express.js, MongoDB, HTML, CSS, SCSS',
  images: [
    '/images/projects/codenitrix_cover.png',
    '/images/projects/codenitrix_1.png',
    '/images/projects/codenitrix_2.png',
    '/images/projects/codenitrix_3.png',
  ],
};

export const tripBudsProject: ProjectCardInterface = {
  id: 2,
  title: 'TripBuds',
  description: `Introducing TripBuds, the ultimate tour booking platform that takes your travel experiences to the next level. With our
  seamless user interface, users can create an account and effortlessly book their dream tours. Our secure integration with Stripe 
  enables hassle-free payments, giving you peace of mind while you explore the world. Excitingly, you can easily track all your booked 
  tours in one place, ensuring a stress-free travel experience. Additionally, our integrated map feature allows you to visualize tour 
  locations with just a glance. Discover the wonders of the world with TripBuds – your perfect travel companion.`,
  coverDescription: `TripBuds is a tour booking platform that provides users with an efficient solution for integrating tour booking 
  functionality into their applications. With TripBuds, developers can seamlessly incorporate features such as user account creation, 
  tour booking, and payment processing using Stripe's API. The platform also offers a user-friendly interface with integrated map 
  functionality, allowing users to visualize tour locations directly within the app. By simplifying the process of integrating tour booking 
  capabilities, TripBuds enables developers to enhance their applications and provide users with a seamless booking experience.`,
  githubLink: 'https://github.com/n0IQ/TripBuds',
  youtubeLink: '',
  projectLink: 'https://trip-buds.vercel.app/',
  technologies: 'JavaScript, Node.js, Express.js, MongoDB, CSS, Pug',
  images: ['/images/projects/codenitrix_cover.png'], // TODO: change image
};

export const instaPinProject: ProjectCardInterface = {
  id: 3,
  title: 'InstaPin',
  description: `
  Welcome to InstaPin, your go-to Image Sharing Platform! InstaPin is tailored to enable seamless sharing and discovery of images, allowing users 
  to link their websites to their images for easy redirection by other users. With InstaPin, users can easily log in, upload their favorite images, 
  add concise descriptions, save pins from fellow users, and effortlessly access all the pins they have created and saved.`,
  coverDescription: `Welcome to InstaPin, an Image Sharing Platform! Instapin is designed to allow users 
  to share and discover images, create pins, and link them to websites. Users can log in, upload images, 
  provide short descriptions, and save pins from other users.`,
  githubLink: 'https://github.com/n0IQ/InstaPin-Backend',
  youtubeLink: '',
  projectLink: 'https://insta-pin-frontend.vercel.app/',
  technologies: 'React, JavaScript, Node.js, Express.js, MongoDB, GraphQL',
  images: [
    '/images/projects/instapin_cover.png',
    '/images/projects/instapin_1.png',
    '/images/projects/instapin_2.png',
  ],
};

export const urlShortenerProject: ProjectCardInterface = {
  id: 4,
  title: 'URL Shortener',
  description: `Introducing Url Shortener, a web application to efficiently shorten lengthy URLs. This app generates unique, 
  random codes for each original link, producing corresponding short URLs. With Url Shortener, users can seamlessly navigate 
  through these shortened links, effortlessly redirected to their original counterparts.`,
  coverDescription: `
  Url Shortener is a web application designed to efficiently shorten lengthy URLs. It generates unique, random codes for each original link, 
  creating corresponding short URLs, which seamlessly redirects to its original counterpart.`,
  githubLink: 'https://github.com/n0IQ/URL-Shortener',
  youtubeLink: '',
  projectLink: 'https://url-shortener-five.vercel.app/',
  technologies: 'React, JavaScript, Node.js, Express.js, MongoDB',
  images: ['/images/projects/url_shortener_cover.png'],
};

export const toDoProject: ProjectCardInterface = {
  id: 5,
  title: 'ToDo-App',
  description: `A simple yet stylish Todo application built using React, Tailwind CSS, HTML, and Firebase. It allows users to create, read, 
  update, and delete Todo items. The application uses Firebase Firestore as the database ensuring seamless storage and retrieval of Todo data.`,
  coverDescription: `A simple yet stylish Todo application built using React, Tailwind CSS, HTML, and Firebase. It allows users to create, read, 
  update, and delete Todo items. The application uses Firebase Firestore as the database to store and retrieve the Todo data.`,
  githubLink: 'https://github.com/n0IQ/ToDo-App',
  youtubeLink: '',
  projectLink: 'https://to-do-app-n0iq.vercel.app/',
  technologies: 'React, JavaScript, Firebase, HTML, Tailwind CSS',
  images: ['/images/projects/todo_cover.png'],
};

export const cryptoTrackerProject: ProjectCardInterface = {
  id: 6,
  title: 'Crypto Tracker',
  description: `Presenting a dynamic crypto tracker application built with React, empowering users to monitor real-time data 
  for a diverse range of cryptocurrencies, including Bitcoin. This intuitive platform allows users to effortlessly track prices, 
  price changes, market capitalization, and more, all in real-time. Leveraging the Coingecko API, users can stay updated with accurate 
  and reliable cryptocurrency information.`,
  coverDescription: `Developed a dynamic crypto tracker application using React, enabling users to monitor real-time data for various 
  cryptocurrencies including Bitcoin. Users can easily track prices, price changes, market capitalization, and more, all in real-time.`,
  githubLink: 'https://github.com/n0IQ/Crypto-Tracker',
  youtubeLink: '',
  projectLink: 'https://crypto-tracker-n0iq.vercel.app/',
  technologies: 'React, JavaScript, HTML, CSS',
  images: ['/images/projects/crypto_tracker_cover.png'],
};

export const myPortfolioProject: ProjectCardInterface = {
  id: 7,
  title: 'My Portfolio',
  description: `This is my portfolio website to showcase my path as a software engineer. Here, you can find details about my skills, 
  work experience, and projects I've worked on. The site offers a peek into my professional journey, highlighting my achievements. You 
  can explore my skills, learn about where I've worked, and check out the projects I've completed. Plus, you'll find easy-to-access contact
  details and links to my coding profiles for more info. It's all about sharing my story as a software engineer in a professional way.`,
  coverDescription: `Created a portfolio website to showcase my journey as a software engineer. This platform highlights my skills, 
  work experience, and various projects, offering insights into my professional background and accomplishments.`,
  githubLink: 'https://github.com/n0IQ/Portfolio',
  youtubeLink: '',
  projectLink: '',
  technologies: 'Next.js, TypeScript, Tailwind CSS',
  images: [
    '/images/projects/my_portfolio_cover.png',
    '/images/projects/my_portfolio_1.png',
    '/images/projects/my_portfolio_2.png',
  ],
};

export const jsDomGameProject: ProjectCardInterface = {
  id: 8,
  title: 'JS Dom Game',
  description: `Enjoy a classic dice game built with HTML, CSS, and vanilla JavaScript. Compete against a friend as you take turns 
  rolling the die to accumulate points. But be cautious! Rolling a 1 resets your round score. Will you play it safe and hold, or risk 
  it all for a higher score? The first player to reach 100 points claims victory. Let the games begin!`,
  coverDescription: `Created a simple yet engaging game using HTML, CSS, and vanilla JavaScript. This two-player dice game allows users 
  to take turns rolling a die and accumulate points. Players must strategize, as rolling a 1 
  resets their round score. `,
  githubLink: 'https://github.com/n0IQ/JS-DOM-Game',
  youtubeLink: '',
  projectLink: 'https://js-dom-game.vercel.app/',
  technologies: 'JavaScript, HTML, CSS',
  images: ['/images/projects/js_dom_game_cover.png'],
};

export const projects: ProjectCardInterface[] = [
  codeNitrixProject,
  tripBudsProject,
  instaPinProject,
  urlShortenerProject,
  toDoProject,
  cryptoTrackerProject,
  myPortfolioProject,
  jsDomGameProject,
];
