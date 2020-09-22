import React from 'react';
import appColors from '../styles/appColors';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Avatar,
  Grid,
  Box,
  IconButton,
  Link,
} from '@material-ui/core';
import Typed from 'react-typed';
import avatar from '../avatar.png';
import linkedinIcon from '../images/linkedin-icon.png';
import githubIcon from '../images/github-icon.png';
import emailIcon from '../images/gmail-icon.png';

// CSS styles
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: theme.spacing(1),
  },
  icon: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    margin: theme.spacing(1),
  },
  title: {
    color: appColors.headerText,
  },
  subTitle: {
    color: appColors.subHeaderText,
    marginBottom: '1rem',
  },
  typedContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100vw',
    textAlign: 'center',
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  const iconLink = (icon: string, link: string) => (
    <IconButton className={classes.icon} onClick={() => window.open(link)}>
      <Avatar src={icon} alt={link} />
    </IconButton>
  );

  const emailLink = (icon: string, email: string) => (
    <IconButton className={classes.icon}>
      <Link target="_top" href={'mailto:' + email} underline="always">
        <Avatar src={icon} alt={email} />
      </Link>
    </IconButton>
  );

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Jeremy Manalo" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={['Jeremy Manalo']} typeSpeed={30} />
      </Typography>
      <br />
      <Typography className={classes.subTitle} variant="h5">
        <Typed
          strings={['Web Design', 'Web Development', 'MERN Stack']}
          typeSpeed={30}
          backSpeed={16}
          loop
        />
      </Typography>
      <Grid container justify="center">
        {iconLink(linkedinIcon, 'https://linkedin.com/in/jeremy-manalo')}
        {iconLink(githubIcon, 'https://github.com/JeremyManalo')}
        {emailLink(emailIcon, 'jeremy.h.manalo@gmail.com')}
      </Grid>
    </Box>
  );
};

export default Header;
