import { Typography, makeStyles } from '@material-ui/core';
import React from 'react';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline-flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    '& > div': {
      fontSize: '14px',
      fontWeight: 'bold',
    },
  },
  containerMessage: {
    backgroundColor: '#c3c3c3',
    padding: '0.5rem',
    borderRadius: '8px',
    display: 'inline-block',
  },
  rightMessage: {
    alignItems: 'flex-end',
  },
}));

const Message = ({ message, name }) => {
  const classes = useStyles();
  return (
    <div
      className={`${classes.root} ${
        message.user === localStorage.getItem('chat-username')
          ? classes.rightMessage
          : null
      }`}
    >
      <div>{name}</div>
      <div className={classes.containerMessage}>
        <Typography>{message.message}</Typography>
      </div>
    </div>
  );
};

export default Message;
