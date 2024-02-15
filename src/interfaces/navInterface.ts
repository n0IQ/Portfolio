export interface NavInterface {
  name: string;
  url: string;
}

const homeNav: NavInterface = {
  name: 'Home',
  url: '/',
};

const workNav: NavInterface = {
  name: 'Work',
  url: '/work-experience',
};

const projectNav: NavInterface = {
  name: 'Projects',
  url: '/projects',
};

const contactNav: NavInterface = {
  name: 'Contact',
  url: '#footer',
};

export const navLinks: NavInterface[] = [
  homeNav,
  workNav,
  projectNav,
  contactNav,
];
