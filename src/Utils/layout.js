import { PixelRatio, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

// base scale of w: 424 h: 942

const widthBaseScale = width / 424;
const heightBaseScale = height / 896;

export const normalize = (size, based) => {
  const newSize =
    based === "height" ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

// for screen width pixel

const widthPixel = (size) => {
  return normalize(size, "width");
};

// for screen height pixel

const heightPixel = (size) => {
  return normalize(size, "height");
};

// for font size pixel relative to the screen height

const fontPixel = (size) => {
  return heightPixel(size);
};

// for vertical (column) margin and padding pixel

const pixelSizeVertical = (size) => {
  return heightPixel(size);
};

// for horizontal (row) margin and padding pixel

const pixelSizeHorizontal = (size) => {
  return widthPixel(size);
};

const fontSize = {
  h1: normalize(24),
  h2: normalize(21),
  h3: normalize(17),
  h4: normalize(16),
  h5: normalize(14),
  h6: normalize(12),
};

export default {
  width,
  height,
  fontPixel,
  widthPixel,
  heightPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
  size: {
    h1: fontSize.h1,
    h2: fontSize.h2,
    h3: fontSize.h3,
    h4: fontSize.h4,
    h5: fontSize.h5,
    h6: fontSize.h6,
    smallerDevice: width <= 375,
  },
};
