import React from 'react';
import { useStyles } from './styles';
import logo from '../../assets/images/logo.svg';
import { Button, Typography } from '@material-ui/core';
const Header = ({ user, handleUserLogout }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.containerNameAndAvatar}>
        <div className={classes.containerAvatar}>
          <img src={logo} alt="group" />
        </div>
        <Typography>VTC Starcamp Batch 1</Typography>
      </div>
      {user && (
        <Button
          variant="contained"
          color="secondary"
          onClick={handleUserLogout}
        >
          {user}, Logout
        </Button>
      )}
    </div>
  );
};

export default Header;
