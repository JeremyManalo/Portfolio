import React from 'react';
import appStyles from '../styles/appStyles';
import { Box } from '@material-ui/core';

const SectionLabel = (name: string) => {
  const appClasses = appStyles();

  return (
    <Box mb={10} mt={10}>
      <Box
        className={appClasses.sectionLabel}
        display="flex"
        justifyContent="center"
        property="h1"
      >
        {name}
      </Box>
      <Box
        className={appClasses.labelAccent}
        display="flex"
        justifyContent="center"
        property="div"
      ></Box>
    </Box>
  );
};

export default SectionLabel;
