import { useState, useEffect } from 'react';

import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Link from 'next/link'

import Container from '@material-ui/core/Container';

import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

import GoogleButton from 'react-google-button'

import HomeIcon from '@material-ui/icons/Home';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

import CustomAvatar from './Avatar';
import { StyledLogoutButton, StyledA, useStyles, StyledGoogleLoginContainer } from './styles';
import { useSelector, useDispatch } from "react-redux";
import { userReset, setUserAuthentication, setUserIsAdmin } from "../../store/actions/user";

function CustomDrawer(props) {

  const dispatch = useDispatch();
  const { userAuthentication, userIsAdmin } = useSelector((state) => state.user);
  const [queryAdmin, setAdmin] = useState([]);
  const [user, loading, error] = useAuthState(firebase.auth());
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (firebase.auth().currentUser !== null && firebase.auth().currentUser !== undefined) {
      firebase.firestore().collection("admin")
        .where("email", "==", firebase.auth().currentUser.email)
        .get()
        .then(querySnapshot => {
          querySnapshot.docs.length > 0 ? dispatch(setUserIsAdmin()) : null;
        })
    }
  }, [userAuthentication])

  useEffect(() => {
    firebase.auth().currentUser !== null ? dispatch(setUserAuthentication()) : null;
    console.log(firebase.auth().currentUser)
  }, [firebase.auth().currentUser])

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  const logout = () => {
    firebase.auth().signOut();
    dispatch(userReset());
  }

  const FuncaoNositema = (props) => {
    return <span style={{ textAlign: '-webkit-center', padding: '20px' }}>{props.funcao}</span>
  }

  return (

    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {"titulo aqui"}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >

        <div className={classes.drawerHeader}>
          <img src="https://i.ibb.co/tX797xj/Setores-Foxter-PADRA-O.png" alt="Setores-Foxter-PADRA-O" style={{ marginRight: '35px', width: '120px', }} />

          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>

        <Divider />

        {userAuthentication ?
          <>
            <CustomAvatar />
            <StyledLogoutButton>
              <button onClick={logout}>Sair</button>
            </StyledLogoutButton>
          </>
          : <StyledGoogleLoginContainer>
            <GoogleButton
              label='Entrar com Gmail'
              onClick={login}
            />
          </StyledGoogleLoginContainer>}

        {userIsAdmin ? <FuncaoNositema funcao="Administrador" /> : null}

        <List>
          <Link href="/" passHref >
            <StyledA >
              <ListItem >
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Página Inicial" />
              </ListItem>
            </StyledA>
          </Link>

          <Link href="/novo-contrato" passHref >
            <StyledA >
              <ListItem >
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Novo Contrato" />
              </ListItem>
            </StyledA>
          </Link>

          <Link href="/novo-resumo-documentacao" passHref >
            <StyledA >
              <ListItem >
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Novo Resumo" />
              </ListItem>
            </StyledA>
          </Link>

        </List>
      </Drawer>

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Container maxWidth="lg">
          {props.children}
        </Container>
      </main>
    </div>

  )
}
export default CustomDrawer