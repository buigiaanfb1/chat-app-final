import React, { useEffect, useState } from 'react';
import Header from '../Header';
import Body from '../Body';
import { useStyles } from './styles';
import InputMessage from '../InputMessage';

const Home = () => {
  const classes = useStyles();
  // this state will take String name
  const [state, setState] = useState(null);

  // Auto login when user refresh a page
  useEffect(() => {
    if (localStorage.getItem('chat-username')) {
      setState(localStorage.getItem('chat-username'));
    }
  }, []);

  const handleUserLogin = (username) => {
    localStorage.setItem('chat-username', username);
    setState(username);
  };

  const handleUserLogout = () => {
    localStorage.removeItem('chat-username');
    setState(null);
  };
  return (
    <div className={classes.root}>
      <Header user={state} handleUserLogout={handleUserLogout} />
      <Body />
      <InputMessage handleUserLogin={handleUserLogin} isLoggedIn={state} />
    </div>
  );
};

export default Home;
