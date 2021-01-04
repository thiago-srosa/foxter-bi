//Import React
import React from 'react';

//Import Material-UI
import Avatar from '@material-ui/core/Avatar';

//Import Firebase
import firebase from 'firebase/app';
import 'firebase/auth';

//
import { useSelector } from "react-redux";

//Import Styles
import useStyles from './styles'

const CustomAvatar = () => {
  const { userIsLoggedIn, userDisplayName, userPhotoUrl } = useSelector((state) => state.user);
  const classes = useStyles();

  return (
    <>
      {userIsLoggedIn ?
        <>
          <div className={classes.avatarDiv}>
            <Avatar alt="Remy Sharp" className={classes.large} src={userPhotoUrl} />
          </div>
          <p>Olá, <b>{userDisplayName}</b></p>
        </>
        : null}        
    </>
  )
}

export default CustomAvatar;