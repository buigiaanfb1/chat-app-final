import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0.5rem',
    borderBottom: '5px solid #000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerNameAndAvatar: {
    display: 'flex',
    alignItems: 'center',
    '& .MuiTypography-root': {
      fontWeight: 'bold',
    },
  },
  containerAvatar: {
    marginRight: '0.5rem',
    '& img': {
      borderRadius: '50%',
      width: '46px',
      height: '46px',
      objectFit: 'cover',
      backgroundColor: '#000',
    },
  },
}));
