import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    borderTop: '5px solid #000',
    padding: '0.5rem',
    '& form': {
      display: 'flex',
      alignItems: 'center',
      '& input': {
        flexGrow: '2',
        padding: '0.3rem',
        fontSize: '18px',
        border: '2px solid #000',
        borderRadius: '0.25rem',
      },
      '& .MuiButton-root': {
        margin: '0 0 0 0.5rem',
      },
    },
  },
}));
