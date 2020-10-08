import React, { useState } from 'react';
import appColors from '../styles/appColors';
import appStyles from '../styles/appStyles';
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
    height: '200px',
  },
  projectTitle: {
    fontSize: '22px',
    color: '#808080',
  },
}));

const projectObjects = {
  projectCaitlin: {
    title: 'Project Caitlin',
    src: 'https://www.youtube.com/embed/Uqqi5AJw3l8',
    srcType: 'video',
  },
  servingNow: {
    title: 'Serving Now',
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
      <Box mb={10} mt={10}>
        <Box
          className={appClasses.sectionLabel}
          display="flex"
          justifyContent="center"
          property="h1"
        >
          Projects
        </Box>
        <Box
          className={appClasses.labelAccent}
          display="flex"
          justifyContent="center"
          property="div"
        ></Box>
      </Box>
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        {projectItem(projectObjects['projectCaitlin'])}
        {projectItem(projectObjects['servingNow'])}
        {projectItem(projectObjects['servingNow'])}
      </Box>
    </Container>
  );
};
export default Projects;
