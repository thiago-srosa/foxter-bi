import { useState, useEffect } from 'react';

import Hidden from '@material-ui/core/Hidden';
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
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Link from 'next/link'

//Import Material UI
import Button from '@material-ui/core/Button';

import HomeIcon from '@material-ui/icons/Home';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useSelector, useDispatch } from "react-redux";
import { userReset, setUserIsAdmin } from "../../store/actions/user";
import { useAuthState } from 'react-firebase-hooks/auth';
import useStyles from './styles';

//Import Types.ts
import {
  UserState,
  UserIsAdmin
} from '../../src/types'

//Import Custom Components with loadable
import loadable from '@loadable/component'
const CustomAvatar = loadable(() => import('./Avatar'))
const StyledA = loadable(() => import('./StyledA'))

const CustomDrawer: React.ElementType = (props) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const dispatch = useDispatch();
  const { user }: UserState = useAuthState(firebase.auth());
  const { userIsAdmin } = useSelector<UserIsAdmin>((state) => state.user);

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

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const logout = () => {
    firebase.auth().signOut();
    dispatch(userReset());
  }

  const FuncaoNositema: React.ElementType = (props) => {
    return <span style={{ padding: '20px' }}>{props.funcao}</span>
  }

  const drawer = (
    <div >

      <div className={classes.drawerHeader}>
        <img src="https://i.ibb.co/B2XpXDB/Logo-3-1.png" alt="Setores-Foxter-PADRA-O" style={{ width: '120px', }} />
      </div>

      <Divider />
      <div style={{ textAlign: 'center' }}>
        {user ?
          <>
            <CustomAvatar />
            <div style={{}}>
              <Button variant="contained" onClick={logout} size="large" color="secondary" style={{ width: '200px', placeSelf: 'center' }}>
                Sair
          </Button>
            </div >
          </>
          : null
        }
        {userIsAdmin ? <FuncaoNositema funcao="Administrador" /> : null}
      </div >

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

      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root} >

      <CssBaseline />

      <AppBar position="fixed" className={classes.appBar} style={user ? null : { display: 'none' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders" style={user ? null : { display: 'none' }}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css" >

          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            style={user ? null : { display: 'none' }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content} >
        <div className={classes.toolbar} />        
        {props.children}
      </main>
    </div>
  );
}
export default CustomDrawer

/*
function CustomDrawer(props) {

  const dispatch = useDispatch();
  const { userIsAdmin } = useSelector((state) => state.user);
  const { user } = useAuthState(firebase.auth());
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

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

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const logout = () => {
    firebase.auth().signOut();
    dispatch(userReset());
  }

  const FuncaoNositema = (props) => {
    return <span style={{ textAlign: '-webkit-center', padding: '20px' }}>{props.funcao}</span>
  }

  const container = window !== undefined ? () => window().document.body : undefined;

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
        <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <h2>
            {"titulo aqui"}
          </h2>
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
          <img src="https://i.ibb.co/B2XpXDB/Logo-3-1.png" alt="Setores-Foxter-PADRA-O" style={{ marginRight: '35px', width: '120px', }} />

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
        style={user ? { backgroundColor: '#eaeff1' } : null}
      >
        <div className={classes.drawerHeader} />
        <Container className={classes.container} maxWidth="md">
          {props.children}
        </Container>
      </main>
    </div >

  )
}
export default CustomDrawer

*/