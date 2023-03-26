export const COLORS = {
  white: 'hsl(0deg 0% 100%)',
  offblack: 'hsl(24deg 5% 6%)',
  gray: {
    100: 'hsl(324, 12%, 92%)',
    300: 'hsl(324, 12%, 82%)',
    500: 'hsl(324, 12%, 62%)',
    700: 'hsl(324, 12%, 32%)',
    900: 'hsl(324, 12%, 12%)',
  },
  primary: 'hsl(224deg 30% 40%)',
  secondary: 'hsl(180deg 34% 37%)',
  urgent: 'hsl(0deg 55% 54%)',
  caution: 'hsl(59, 68%, 63%)',
  success: 'hsl(123, 68%, 63%)',
  pending: 'hsla(253, 68%, 63%, 1)',
};

export const WEIGHTS = {
  normal: 400,
  medium: 550,
  bold: 700,
};

export const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
};

export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
  tabletOnly: `
    (min-width: ${BREAKPOINTS.tabletMin / 16}rem) and
    (max-width: ${(BREAKPOINTS.laptopMin - 1) / 16}rem)`,
};

export const FAMILIES = {
  serif: '"Crimson Pro", Georgia, serif',
  sansSerif:
    '"Helvetica Neue", Helvetica, "Franklin Gothic Medium", "Franklin Gothic", "ITC Franklin Gothic", sans-serif',
  logo: 'Chomsky',
};

const ENVIRONMENT_SETTINGS = {
  development: {
    api: 'http://localhost:3020/api',
    host: 'http://localhost:3000',
  },
  production: {
    api: '/api',
    host: '', // TODO: Set as an evironment variable
  },
  test: {
    api: 'tbd',
    host: 'tbd',
  },
};

export const API_URL = ENVIRONMENT_SETTINGS[process.env.NODE_ENV].api;
export const HOST_URL = ENVIRONMENT_SETTINGS[process.env.NODE_ENV].host;
