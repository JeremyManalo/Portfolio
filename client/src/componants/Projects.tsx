import React, { useState } from 'react';
import appColors from '../styles/appColors';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container } from '@material-ui/core';
import SpringModal from './ProjectModal';
import servingNowImage from '../images/serving-now.png';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: '2rem',
  },
  projectItem: {
    marginBottom: '4rem',
    minWidth: '300px',
    width: '50%',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  projectMedia: {
    width: '100%',
    height: '200px',
  },
  projectInfoContainer: {
    marginTop: '-10px',
    backgroundColor: '#fff',
    height: '200px',
  },
  projectTitle: {
    fontSize: '22px',
    color: '#808080',
  },
}));

const projectCaitlinObject = {
  title: 'Project Caitlin',
  src: 'https://www.youtube.com/embed/Uqqi5AJw3l8',
  srcType: 'video',
};

const servingNowObject = {
  title: 'Serving Now',
  src: servingNowImage,
  srcType: 'image',
};

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

  const projectItem = (projectObject: any) => (
    <Box className={classes.projectItem}>
      {renterProjectTypeSwitch(projectObject.srcType, projectObject.src)}
      <Box className={classes.projectInfoContainer} borderRadius={4}>
        <Box
          className={classes.projectTitle}
          display="flex"
          justifyContent="center"
          component="div"
          pt={1}
        >
          {projectObject.title}
        </Box>
        <Box display="flex" justifyContent="center" component="div" pt={1}>
          {SpringModal()}
        </Box>
      </Box>
    </Box>
  );

  return (
    <Container className={classes.mainContainer} maxWidth="md">
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        {projectItem(projectCaitlinObject)}
        {projectItem(servingNowObject)}
        {projectItem(servingNowObject)}
      </Box>
    </Container>
  );
};
export default Projects;
