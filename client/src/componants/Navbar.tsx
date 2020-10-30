import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import appColors from '../styles/appColors';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Box } from '@material-ui/core';

// CSS STYLES
const useStyles = makeStyles((theme) => ({
  listItem: {
    fontSize: '18px',
    color: appColors.headerText,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <Box component="nav">
        <AppBar
          position="static"
          style={{ background: 'transparent', boxShadow: 'none' }}
        >
          <Toolbar>
            <Box flexGrow={1}></Box>
            <Box className={classes.listItem} pr={4}>
              Projects
            </Box>
            <Box className={classes.listItem}> Contact</Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
