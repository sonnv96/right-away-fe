import { makeStyles } from '@material-ui/core';
import React from 'react';
import Header from './components/Header';

interface Props {}

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    paddingTop: theme.spacing(1),
  },
  loading: {
    position: 'absolute',
    top: theme.spacing(-1),
    width: '100%',
  },
}));

export const HomePage = (props: Props) => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <h1>hello right away</h1>
    </>
  );
};

export default HomePage;
