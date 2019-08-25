const palette = {
  storm: {
    "06": "#F3F4F5",
    "11": "#E8EAEC",
    "17": "#DCDFE1",
    "28": "#C5C9CE",
    "50": "#969EA7",
    "72": "#687480",
    "83": "#515E6D",
    "100": "#2E3E4F",
  },
  white: "#ffffff",
};

const color = {
  text: palette.storm["72"],
  "text-darker": palette.storm["100"],
};

const background = {
  application: "#202020",
  card: palette.white,
};

const border = {
  width: {
    thin: "1px",
    thick: "2px",
  },
};

const borderRadius = {
  input: "0.2rem",
  tag: "0.2rem",
};

const fontFamily = "'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";

const padding = {
  tiny: "0.8rem",
  small: "1.6rem",
  medium: "2.0rem",
  large: "2.4rem",
};

const size = {
  border: {
    thin: `${border.width.thin} solid ${palette.storm["11"]}`,
    thick: `${border.width.thick} solid ${palette.storm["11"]}`,
  },
};

const spacing = {
  "xx-tiny": "0.2rem",
  "x-tiny": "0.4rem",
  tiny: "0.8rem",
  "x-small": "1.2rem",
  small: "1.6rem",
  medium: "2.0rem",
  large: "2.4rem",
  "x-large": "3.2rem",
  "xx-large": "4.8rem",
};

export default {
  palette,
  color,
  background,
  border,
  "border-radius": borderRadius,
  "font-family": fontFamily,
  padding,
  size,
  spacing,
};
