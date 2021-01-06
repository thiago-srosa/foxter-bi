//REACT
import React from 'react';
//REACT-REDUX
import { useSelector } from "react-redux";
//STATE TYPE
import { RootState } from '../../../../store/reducers'
//CUSTOM STYLES
import useStyles from '../styles'
//LOADABLE/COMPONENT
import loadable from '@loadable/component'

const Avatar = loadable(() => import('@material-ui/core/Avatar'))

const CustomAvatar = (): JSX.Element => {

  const {
    userIsLoggedIn,
    userDisplayName,
    userPhotoUrl,
  } = useSelector((state: RootState) => state.user);

  const classes = useStyles();

  const AvatarDiv = (): React.ReactElement => {
    if (userIsLoggedIn) {
      return (
        <>
          <div className={classes.avatarDiv}>
            <Avatar alt="Remy Sharp" className={classes.large} src={userPhotoUrl} />
          </div>
          <p>Olá, <b>{userDisplayName}</b></p>
        </>
      )
    }
    return null
  }

  return (
    <>
      <AvatarDiv />
    </>
  )
}

export default CustomAvatar;