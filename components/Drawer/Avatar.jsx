import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import { useAuthState } from 'react-firebase-hooks/auth';

import firebase from 'firebase/app';
import 'firebase/auth';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: '15px',
    textAlign: '-webkit-center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const CustomAvatar = () => {
  const { user } = useAuthState(firebase.auth());
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {user ?
        <>
          <Avatar alt="Remy Sharp" className={classes.large} src={user.photoURL} />
          <p>Olá, <b>{user.displayName}</b></p>
        </>
        : null}
    </div>
  )
}

export default CustomAvatar;