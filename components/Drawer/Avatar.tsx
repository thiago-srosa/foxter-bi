//Import React
import React from 'react';

//Import Material-UI
import Avatar from '@material-ui/core/Avatar';

//Import Firebase Hooks
import { useAuthState } from 'react-firebase-hooks/auth';

//Import Firebase
import firebase from 'firebase/app';
import 'firebase/auth';

//Import Styles
import useStyles from './styles'

const CustomAvatar = () => {
  const { user } = useAuthState(firebase.auth());
  const classes = useStyles();

  return (
    <div className={classes.avatarDiv}>
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