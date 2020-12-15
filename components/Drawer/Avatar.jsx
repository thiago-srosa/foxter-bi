import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { setUserPhotoURL } from "../../store/actions/user";

import { useSelector, useDispatch } from "react-redux";

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
  const dispatch = useDispatch();
  const classes = useStyles();

  const { userPhotoURL, userAuthentication } = useSelector((state) => state.user);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        if (firebase.auth().currentUser !== null) {
          dispatch(setUserPhotoURL(firebase.auth().currentUser.photoURL));
        }
      }
    })
  }, [firebase.auth().currentUser])

  return (
    <div className={classes.root}>
      {userAuthentication ?
        <>
          <Avatar alt="Remy Sharp" className={classes.large} src={userPhotoURL} />
          <p>Olá, <b>{firebase.auth().currentUser.displayName}</b></p>          
        </>
        : null}
    </div>
  )
}

export default CustomAvatar;