import ColorLuminance from '../utlis/ColorLuminance';

const bodyColor: string = '#3e536d';

const appColors = {
  headerText: '#f6db83',
  subHeaderText: '#fff',
  body: bodyColor,
  bodyDarker: ColorLuminance(bodyColor, -0.2),
  bodyLighter: ColorLuminance(bodyColor, 0.2),
};

export default appColors;
