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
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginTop={15}
      component="div"
    >
      <Box display="block" component="div">
        <Box display="flex" component="div">
          <Grid container justify="center">
            <Avatar
              className={classes.avatar}
              src={avatar}
              alt="Jeremy Manalo"
            />
          </Grid>
        </Box>
        <Box display="flex" justifyContent="center" component="div">
          <Typography className={classes.title} variant="h4">
            <Typed
              strings={['Jeremy Manalo']}
              typeSpeed={50}
              showCursor={false}
            />
          </Typography>
        </Box>
        <Box
          display="flex"
          marginTop={1}
          justifyContent="center"
          component="div"
        >
          <Typography className={classes.subTitle} variant="h5">
            <Typed
              strings={['Web Design', 'Web Development', 'MERN Stack']}
              typeSpeed={50}
              backSpeed={20}
              loop
            />
          </Typography>
        </Box>
        <Box component="div">
          <Grid container justify="center">
            {iconLink(linkedinIcon, 'https://linkedin.com/in/jeremy-manalo')}
            {iconLink(githubIcon, 'https://github.com/JeremyManalo')}
            {emailLink(emailIcon, 'contact@jeremymanalo.com')}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
