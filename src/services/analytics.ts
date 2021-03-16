import ReactGA from 'react-ga';

const { NEXT_PUBLIC_GA_ID } = process.env;

export const initGA = () => {
  console.log(NEXT_PUBLIC_GA_ID);
  ReactGA.initialize(NEXT_PUBLIC_GA_ID);
};

export const gaPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const gaEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
};

export const gaException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};

export const lnkzEvents = {
  page: {
    footerLogoClick: () => gaEvent('Page', 'Clicked Footer Logo'),
    linkClick: () => gaEvent('Page', 'Clicked Link'),
  },
};
