import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Box, Link, Avatar } from '@material-ui/core';
import titleBarOptions from '../images/title-bar-options.png';

const userStyles = makeStyles({
  mainContainer: {
    marginTop: '35rem',
    fontFamily: 'monaco',
  },
  tabbedLines: {
    paddingLeft: '19px',
    borderLeft: '1px solid #3b4047',
  },
  reverseIndent: {
    display: 'inline-block',
    paddingLeft: '25px',
    textIndent: '-20px',
  },
  codeWindow: {
    padding: '2px',
    backgroundColor: '#282c33',
  },
  titleBar: {
    backgroundColor: '#282c33',
  },
  titleBarOptions: {
    marginLeft: '10px',
    width: '48px',
    height: '12px',
  },
  codeArea: {
    padding: '1rem',
    backgroundColor: '#282c33',
  },
  typeText: {
    color: '#c57bdb',
  },
  keyText: {
    color: '#de6d77',
  },
  operatorText: {
    color: '#5ab6c1',
  },
  stringText: {
    color: '#8fb574',
  },
  varText: {
    color: '#abb2be',
  },
  LineNumberText: {
    color: '#464e5e',
  },
});

var jeremy = {
  currentLocation: 'San Diego, California',
  contacts: [
    {
      text: 'LinkedIn',
      link: 'https://linkedin.com/in/jeremy-manalo',
    },
    {
      text: 'GitHub',
      link: 'https://github.com/JeremyManalo',
    },
  ],
  education:
    'B.Sc. Structural Engineering - University of California, Santa Cruz',
  skills: ['JavaScipt', 'React', 'Python', 'Git'],
};

const MyInfo = () => {
  const classes = userStyles();

  const coloredText = (color: string, key: string) => (
    <Box className={color} component="span">
      {key}
    </Box>
  );

  // Name Declaration Line
  const nameDeclLine = () => (
    <Box className={classes.reverseIndent} component="span">
      {coloredText(classes.typeText, 'var ')}
      {coloredText(classes.varText, 'jeremy ')}
      {coloredText(classes.operatorText, '= ')}
      {coloredText(classes.varText, '{')}
    </Box>
  );

  // String Key Line
  const strKeyLine = (key: string, val: string) => (
    <Box className={classes.reverseIndent} component="span">
      {coloredText(classes.keyText, key)}
      {coloredText(classes.operatorText, ': ')}
      {coloredText(classes.stringText, "'" + val + "'")}
      {coloredText(classes.varText, ',')}
      <br />
    </Box>
  );

  // Link Key Line
  const linkKeyLine = (key: string, val: { text: string; link: string }[]) => (
    <Box className={classes.reverseIndent} component="span">
      {coloredText(classes.keyText, key)}
      {coloredText(classes.operatorText, ': ')}
      {coloredText(classes.varText, '[')}
      <Link
        target="_top"
        href="mailto:jeremy.h.manalo@gmail.com"
        underline="always"
      >
        jeremy.h.manalo@gmail.com
      </Link>
      {coloredText(classes.varText, ', ')}
      {val.map((value, index) => {
        return (
          <Box component="span">
            <Link underline="always" onClick={() => window.open(value.link)}>
              {value.text}
            </Link>
            {index !== val.length - 1 ? (
              <Box component="span">{coloredText(classes.varText, ', ')}</Box>
            ) : (
              <Box component="span"></Box>
            )}
          </Box>
        );
      })}
      {coloredText(classes.varText, '],')}
      <br />
    </Box>
  );

  // String Array Key Line
  const strArrKeyLine = (key: string, val: string[]) => (
    <Box className={classes.reverseIndent} component="span">
      {coloredText(classes.keyText, key)}
      {coloredText(classes.operatorText, ': ')}
      {coloredText(classes.varText, '[')}
      {val.map((value, index) => {
        return (
          <Box component="span">
            {coloredText(classes.stringText, "'" + value + "'")}
            {index !== val.length - 1 ? (
              <Box component="span">{coloredText(classes.varText, ', ')}</Box>
            ) : (
              <Box component="span"></Box>
            )}
          </Box>
        );
      })}
      {coloredText(classes.varText, '],')}
      <br />
    </Box>
  );

  return (
    <Container className={classes.mainContainer} maxWidth="md">
      <Typography style={{ fontFamily: 'Monaco' }}>
        <Box className={classes.codeWindow} borderRadius={5}>
          <Box className={classes.titleBar}>
            <img
              className={classes.titleBarOptions}
              src={titleBarOptions}
              alt="title bar options"
            />
          </Box>
          <Box className={classes.codeArea}>
            {nameDeclLine()}
            <Box className={classes.tabbedLines}>
              {strKeyLine('currentLocation', jeremy.currentLocation)}
              {linkKeyLine('contacts', jeremy.contacts)}
              {strKeyLine('education', jeremy.education)}
              {strArrKeyLine('skills', jeremy.skills)}
            </Box>
            {coloredText(classes.varText, '},')}
          </Box>
        </Box>
      </Typography>
    </Container>
  );
};
export default MyInfo;
