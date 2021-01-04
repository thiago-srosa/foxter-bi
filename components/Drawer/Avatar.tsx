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
    <>
      {user ?
        <>
          <div className={classes.avatarDiv}>
            <Avatar alt="Remy Sharp" className={classes.large} src={user.photoURL} />
          </div>
          <p>Olá, <b>{user.displayName}</b></p>          
        </>
        : null}
    </>
  )
}

export default CustomAvatar;