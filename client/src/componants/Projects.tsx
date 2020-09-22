import React from 'react';
import appColors from '../styles/appColors';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Container } from '@material-ui/core';
import servingNowImage from '../images/serving-now.png';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: '2rem',
  },
  projectItem: {
    marginBottom: '2rem',
    minWidth: '300px',
    width: '50%',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  projectMedia: {
    width: '100%',
    height: '200px',
  },
  projectInfo: {
    marginTop: '-10px',
    backgroundColor: '#f0e9d1',
    height: '200px',
  },
}));

const Projects = () => {
  const classes = useStyles();

  const projectVideoItem = () => (
    <Box className={classes.projectItem}>
      <iframe
        className={classes.projectMedia}
        src="https://www.youtube.com/embed/Uqqi5AJw3l8"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <Box className={classes.projectInfo} borderRadius={4}></Box>
    </Box>
  );
  const projectImageItem = () => (
    <Box className={classes.projectItem}>
      <img className={classes.projectMedia} src={servingNowImage} />
      <Box className={classes.projectInfo} borderRadius={4}></Box>
    </Box>
  );

  return (
    <Container className={classes.mainContainer} maxWidth="md">
      <Box display="flex" flexWrap="wrap" justifyContent="start">
        {projectVideoItem()}
        {projectImageItem()}
        {projectImageItem()}
      </Box>
    </Container>
  );
};
export default Projects;
