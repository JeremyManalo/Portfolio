import ColorLuminance from '../utlis/ColorLuminance';

const bodyColor: string = '#0a1b1c';

const appColors = {
  headerText: '#fff',
  subHeaderText: '#d4d4d4',
  projectText: '#808080',
  codeWindow: '#282c33',
  body: bodyColor,
  bodyDarker: ColorLuminance(bodyColor, -0.2),
  bodyLighter: ColorLuminance(bodyColor, 0.2),
};

export default appColors;
