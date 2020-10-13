import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import appColors from '../styles/appColors';
import { makeStyles } from '@material-ui/core/styles';
import MobileRightMenuSlider from '@material-ui/core/Drawer';
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  ListItemIcon,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
} from '@material-ui/core';
import { AssignmentInd, Home, Apps, ContactMail } from '@material-ui/icons';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import avatar from '../avatar.png';

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
