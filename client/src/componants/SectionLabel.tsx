import React from 'react';
import appColors from '../styles/appColors';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  sectionLabel: {
    color: appColors.headerText,
    fontSize: '30px',
  },
  labelAccent: {
    marginTop: '5px',
    border: '4px solid ' + appColors.subHeaderText + ';',
    width: '90px',
    margin: 'auto',
  },
}));

const SectionLabel = (name: string) => {
  const classes = useStyles();

  return (
    <Box mb={10} mt={10}>
      <Box
        className={classes.sectionLabel}
        display="flex"
        justifyContent="center"
        property="h1"
      >
        {name}
      </Box>
      <Box
        className={classes.labelAccent}
        display="flex"
        justifyContent="center"
        property="div"
      ></Box>
    </Box>
  );
};

export default SectionLabel;
