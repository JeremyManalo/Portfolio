import React from 'react';
import appColors from '../styles/appColors';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

// CSS styles
const useStyles = makeStyles((theme) => ({
  footer: {
    height: '100px',
    paddingBottom: '20px',
  },
  copyrightText: {
    color: appColors.subHeaderText,
    alignContent: '',
    fontSize: 12,
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box
      className={classes.footer}
      display="flex"
      justifyContent="center"
      alignItems="flex-end"
      component="div"
    >
      <Typography className={classes.copyrightText}>
        Created by Jeremy Manalo © 2020
      </Typography>
    </Box>
  );
};

export default Footer;
