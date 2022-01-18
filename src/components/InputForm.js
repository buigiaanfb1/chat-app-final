import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { addDocs } from '../firebase/addDocs';
const InputForm = ({ placeholder, handleUserLogin = null }) => {
  const [state, setState] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // handleUserLogin only pass to this component if
    // user is not login so they need to enter their name
    if (handleUserLogin) {
      handleUserLogin(state);
    } else {
      // here user is logged in, so I not pass the handleUserLogin
      await addDocs(state);
    }
    // clean up input field
    setState('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={state}
        placeholder={placeholder}
        onChange={(e) => setState(e.target.value)}
      />
      <Button variant="contained" color="primary" type="submit">
        Go
      </Button>
    </form>
  );
};

export default InputForm;
