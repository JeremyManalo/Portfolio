import React, { useState } from 'react';
import appColors from '../styles/appColors';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Container } from '@material-ui/core';
import SpringModal from './ProjectModal';
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
    backgroundColor: '#fcfcfc',
    height: '200px',
  },
}));

const projects = {};

const Projects = () => {
  const classes = useStyles();

  const [state, setState] = useState();

  const renterProjectTypeSwitch = (type: string, src: string) => {
    switch (type) {
      case 'video':
        return (
          <iframe
            className={classes.projectMedia}
            src={src}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        );
      case 'image':
        return <img className={classes.projectMedia} src={servingNowImage} />;
    }
  };

  const projectItem = (properties: object) => (
    <Box className={classes.projectItem}>
      {renterProjectTypeSwitch(type, src)}
      <Box className={classes.projectInfo} borderRadius={4}>
        <Typography>
          <Box component="h1">{title}</Box>
        </Typography>
        {SpringModal()}
      </Box>
    </Box>
  );

  return (
    <Container className={classes.mainContainer} maxWidth="md">
      <Box display="flex" flexWrap="wrap" justifyContent="start">
        {projectItem('video', 'https://www.youtube.com/embed/Uqqi5AJw3l8')}
        {projectItem('image', servingNowImage)}
      </Box>
    </Container>
  );
};
export default Projects;
