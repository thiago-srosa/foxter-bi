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

//Import Material UI
import Button from '@material-ui/core/Button';

import HomeIcon from '@material-ui/icons/Home';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import CustomAvatar from './Avatar';
import { StyledLogoutButton, StyledA, useStyles } from './styles';
import { useSelector, useDispatch } from "react-redux";
import { userReset, setUserIsAdmin } from "../../store/actions/user";
import { useAuthState } from 'react-firebase-hooks/auth';

function CustomDrawer(props) {

  const dispatch = useDispatch();
  const { userIsAdmin } = useSelector((state) => state.user);
  const { user } = useAuthState(firebase.auth());
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (user) {
      firebase.firestore().collection("admin")
        .where("email", "==", user.email)
        .get()
        .then(querySnapshot => {
          querySnapshot.docs.length > 0 ? dispatch(setUserIsAdmin()) : null;
        })
    }
  }, [user])

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const logout = () => {
    firebase.auth().signOut();
    dispatch(userReset());
  }

  const FuncaoNositema = (props) => {
    return <span style={{ textAlign: '-webkit-center', padding: '20px' }}>{props.funcao}</span>
  }

  return (

    <div className={classes.root} style={user ? null : { backgroundColor: 'rgb(66, 133, 244)' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={user ? null : { display: 'none' }}
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
        style={user ? null : { display: 'none' }}
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

        {user ?
          <>
            <CustomAvatar />
            <Button className={classes.buttonLEFT} variant="contained" onClick={logout} size="large" color="secondary" style={{ width: '200px', placeSelf: 'center' }}>
              Sair
             </Button>
          </>
          : null
        }

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
        <Container maxWidth="lg" >
          {props.children}
        </Container>
      </main>
    </div >

  )
}
export default CustomDrawer