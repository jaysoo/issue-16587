export const palette = {
  black: '#000',
  white: '#FFF',
};

export const space = {
  none: '0',
  small: '0.4rem',
  medium: '0.8rem',
  large: '1.6rem',
};

export const fontSize = {
  small: '1rem',
  medium: '1.2rem',
  large: '1.4rem',
  xlarge: '1.6rem',
};

export const tokens = {
  palette,
  colors: {
    brand: palette.black,
    secondary: palette.white,

    primary: {
      bg: palette.white,
      text: palette.black,
    },

    neutral: {
      bg: palette.white,
      text: palette.black,
    },
  },
  space,
  fontSize,
};
