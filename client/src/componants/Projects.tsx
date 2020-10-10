import React, { useState } from 'react';
import appColors from '../styles/appColors';
import appStyles from '../styles/appStyles';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container, Typography } from '@material-ui/core';
import SectionLabel from './SectionLabel';
import SpringModal from './ProjectModal';
import servingNowImage from '../images/serving-now.png';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: '2rem',
  },
  projectItem: {
    marginBottom: '4rem',
    minWidth: '300px',
    width: '40%',
    marginLeft: '5%',
    marginRight: '5%',
  },
  projectMedia: {
    width: '100%',
    height: '200px',
  },
  projectInfoContainer: {
    marginTop: '-10px',
    backgroundColor: appColors.subHeaderText,
    minHeight: '300px',
  },
  projectTitle: {
    fontSize: '24px',
    color: '#808080',
    textAlign: 'center',
  },
  projectDescription: {
    fontSize: '14px',
    color: '#808080',
    textAlign: 'justify',
  },
}));

const projectObjects = {
  projectCaitlin: {
    title: 'Project Caitlin',
    description:
      'A web and Mobile Application for a high school girl who sustained a head injury during her cross country practice. She now suffers from a form of aphasia that causes her to lose her memory every minute. This application was made to help her keep track of her day to day life as well as her goals and aspirations',
    src: 'https://www.youtube.com/embed/Uqqi5AJw3l8',
    srcType: 'video',
  },
  servingNow: {
    title: 'Serving Now',
    description:
      'Another web and mobile application that provides a platform for local San Jose farmers to list, sell, and have their produce delievered to customers.',
    src: servingNowImage,
    srcType: 'image',
  },
};

const Projects = () => {
  const classes = useStyles();
  const appClasses = appStyles();

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
    <Box boxShadow={10} className={classes.projectItem}>
      {renterProjectTypeSwitch(projectObject.srcType, projectObject.src)}
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        p={1}
        className={classes.projectInfoContainer}
        borderRadius={4}
      >
        <Box flexGrow={1} style={{ fontFamily: 'Verdana' }}>
          <Box className={classes.projectTitle} pt={1}>
            {projectObject.title}
          </Box>
          <Box className={classes.projectDescription} pt={1} px={3}>
            {projectObject.description}
          </Box>
        </Box>
        <Box>{SpringModal()}</Box>
      </Box>
    </Box>
  );

  return (
    <Container className={classes.mainContainer} maxWidth="md">
      {SectionLabel('Projects')}
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        {projectItem(projectObjects['projectCaitlin'])}
        {projectItem(projectObjects['servingNow'])}
        {projectItem(projectObjects['servingNow'])}
      </Box>
    </Container>
  );
};
export default Projects;
