const colors = {
  purple: '#2A2050',
  lightPurple: '#BE86EF',
  palePurple: '#E9D0FF',
  green: '#50E3C2',
  lemonGreen: '#B5EE76',
  yellow: '#FBECAE',
  red: '#FFB2BC',
  white: '#FFFFFF',
  charcoalGrey: '#AAA8AC',
  lightGrey: '#F1F1F2',
  grey: '#666666',
  darkGrey: '#343A40',
  black: '#000000',
  pink: '#E72264',
  darkPink: '#d81758',
  ligthPink: '#d81758',
  blue: '#2D2D7D',
  darkBlue: '#26266a',
  lightBlue: '#5CB3E5'
};

const Theme = {
  //COLORS
  ...colors,
  primary: colors.pink,
  primaryLight: colors.darkPink,
  secondary: colors.blue,
  secondaryDark: colors.darkBlue,
  gradient: `linear-gradient(${colors.pink}, ${colors.blue});`,

  //BOXSHADOWS
  boxShadow1:
    'rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px',
  boxShadow2:
    'rgba(0, 0, 0, 0.2) 0px 1px 5px 0px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 3px 1px -2px',
  boxShadow3:
    'rgba(0, 0, 0, 0.2) 0px 1px 8px 0px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 3px 3px -2px',

  //TYPOGRAPHY SIZES:
  defaultFontSize: '1rem',
  mediumFontSize: '0.9rem',
  smallFontSize: '0.8rem'
};

export default Theme;
