import appColors from './appColors';
import { makeStyles } from '@material-ui/core/styles';

const appStyles = makeStyles((theme) => ({
  sectionLabel: {
    color: appColors.headerText,
    fontSize: '30px',
  },
  labelAccent: {
    marginTop: '5px',
    border: '4px solid ' + appColors.subHeaderText + ';',
    width: '80px',
    margin: 'auto',
  },
}));

export default appStyles;
