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
  menuSliderContainer: {
    width: 250,
    background: '#1b3047',
    height: '100%',
  },
  avatar: {
    display: 'block',
    margin: '0.5rem auto',
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: appColors.subHeaderText,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
}));

const Navbar = () => {
  return (
    <>
      <Box component="nav">
        <AppBar
          position="static"
          style={{ background: 'transparent', boxShadow: 'none' }}
        >
          <Toolbar></Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
