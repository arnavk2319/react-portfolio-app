import ReactGA from "react-ga4";

export const initGA = () => {
  const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID;
  if (GA_MEASUREMENT_ID) {
    ReactGA.initialize(GA_MEASUREMENT_ID);
  } else {
    console.warn("Google Analytics Measurement ID not found!");
  }
};

export const logPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};
