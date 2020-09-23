import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import MyInfo from './MyInfo';
import Projects from './Projects';
import Footer from './Footer';
import AppParticles from './AppParticles';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const userStyles = makeStyles({
  myInfoComp: {
    fontFamily: 'monaco',
  },
});

const Home = () => {
  const classes = userStyles();

  return (
    <Box component="div">
      <AppParticles />
      <Navbar />
      <Header />
      <MyInfo />
      {/* <Projects /> */}
      <Footer />
    </Box>
  );
};

export default Home;
