import React, { useEffect } from 'react';
import appColors from '../styles/appColors';
import Particles from 'react-tsparticles';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  particlesCanvas: {
    position: 'absolute',
    width: '100%',
    zIndex: -1,
  },
});

const AppParticles = () => {
  const classes = useStyles();

  useEffect(() => {
    var particlesElem = document.getElementById('tsparticles');
    var rootElem = document.getElementById('root');
    if (particlesElem && rootElem) {
      console.log(particlesElem.style.height, ' ', particlesElem.style.height);
      particlesElem.style.height = rootElem.style.height + 'px';
    }
  });

  return (
    <Particles
      id="tsparticles"
      canvasClassName={classes.particlesCanvas}
      params={{
        particles: {
          number: {
            value: 100,
          },
          shape: {
            stroke: {
              width: 1,
              color: appColors.subHeaderText,
            },
          },
          size: {
            value: 4,
            random: true,
            animation: {
              enable: false,
              speed: 15,
              size_min: 0.001,
              sync: true,
            },
          },
          move: {
            out_mode: 'out',
            enable: true,
            speed: 0.5,
          },
          links: {
            enable: true,
            opacity: 0.12,
            distance: 220,
          },
          opacity: {
            value: 0.12,
            animation: {
              enable: true,
              speed: 0.1,
              opacity_min: 0,
              sync: false,
            },
          },
        },
      }}
    />
  );
};

export default AppParticles;
