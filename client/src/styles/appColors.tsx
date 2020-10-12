import ColorLuminance from '../utlis/ColorLuminance';

const bodyColor: string = '#0a1b1c';

const appColors = {
  headerText: '#e9b521',
  subHeaderText: '#b0b0b0',
  projectText: '#808080',
  body: bodyColor,
  bodyDarker: ColorLuminance(bodyColor, -0.2),
  bodyLighter: ColorLuminance(bodyColor, 0.2),
};

export default appColors;
