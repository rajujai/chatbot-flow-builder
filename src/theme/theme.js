import { createTheme } from "@mui/material"

const commonColors = {
  primary: {
    main: '#1976d2',
  },
  secondary: {
    main: '#9c27b0',
  },
  error: {
    main: '#f44336',
  },
};

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    ...commonColors,
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#000000',
      secondary: '#555555',
    },
    
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    ...commonColors,
    background: {
      default: '#121212',
      paper: '#1d1d1d',
    },
    text: {
      primary: '#ffffff',
      secondary: '#bbbbbb',
    },
  },
});