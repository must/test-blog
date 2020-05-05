import { createTheme } from '@codedoc/core/transport';


export const theme = /*#__PURE__*/createTheme({
  light: {
    background: '#f1e3cb',
    primary: '#ca5116'
  },
  dark: {
    background: '#162447',
    primary: '#e43f5a'
  },
  toc: {
    light: {
      background: '#f0daa4',
    },
    dark: {
      background: '#132042',
    }
  },
  quote: {
    light: {
      background: '#f0daa4',
      border: '#f9b384'
    },
    dark: {
      background: '#132042',
      border: '#1f4068',
    }
  }
});
