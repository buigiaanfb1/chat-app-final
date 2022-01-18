import React from 'react';
import InputForm from '../../components/InputForm';
import { useStyles } from './styles';

const InputMessage = ({ handleUserLogin, isLoggedIn }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {isLoggedIn ? (
        <InputForm placeholder="Message..." />
      ) : (
        <InputForm
          placeholder="Enter your name..."
          handleUserLogin={handleUserLogin}
        />
      )}
    </div>
  );
};

export default InputMessage;
