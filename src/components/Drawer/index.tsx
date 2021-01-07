//REACT
import { useState, useEffect } from 'react';
//MATERIAL-UI
import { useTheme } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem'
//FIREBASE
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//REACT-REDUX
import { useSelector, useDispatch } from "react-redux";
//STORE => USER ACTIONS
import { resetUser, setUserIsAdmin } from "../../../store/user/actions";
//STORE => USER ACTIONS
import { setToogleDrawer } from "../../../store/global/actions";
//STATE TYPE
import { RootState } from '../../../store/reducers'
//CUSTOM STYLES
import useStyles from './styles';
//LOADABLE-COMPONENT
import loadable from '@loadable/component'

const Button = loadable(() => import('@material-ui/core/Button'))
const HomeIcon = loadable(() => import('@material-ui/icons/Home'))
const CustomAvatar = loadable(() => import('./components/Avatar'))
const StyledA = loadable(() => import('./components/StyledComponents/StyledA'))
const Hidden = loadable(() => import('@material-ui/core/Hidden'))
const Drawer = loadable(() => import('@material-ui/core/Drawer'))
const CssBaseline = loadable(() => import('@material-ui/core/CssBaseline'))
const AppBar = loadable(() => import('@material-ui/core/AppBar'))
const Toolbar = loadable(() => import('@material-ui/core/Toolbar'))
const List = loadable(() => import('@material-ui/core/List'))
const Typography = loadable(() => import('@material-ui/core/Typography'))
const Divider = loadable(() => import('@material-ui/core/Divider'))
const IconButton = loadable(() => import('@material-ui/core/IconButton'))
const MenuIcon = loadable(() => import('@material-ui/icons/Menu'))
const ListItemIcon = loadable(() => import('@material-ui/core/ListItemIcon'))
const ListItemText = loadable(() => import('@material-ui/core/ListItemText'))
const InboxIcon = loadable(() => import('@material-ui/icons/MoveToInbox'))
const Link = loadable(() => import('next/link'))

const CustomDrawer = (props: any): JSX.Element => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();

  const {
    userEmail,
    userIsLoggedIn,
    userIsAdmin
  } = useSelector((state: RootState) => state.user);

  const {
    toogleDrawer
  } = useSelector((state: RootState) => state.global);

  useEffect(() => {
    if (userEmail) {
      firebase.firestore().collection("admin")
        .where("email", "==", userEmail)
        .get()
        .then(querySnapshot => {
          querySnapshot.docs.length > 0 ? dispatch(setUserIsAdmin(true)) : null;
        })
    }
  }, [userEmail])

  const handleDrawerToggle = () => {
    dispatch(setToogleDrawer(!toogleDrawer))
  };

  const logout = () => {
    firebase.auth().signOut();
    dispatch(resetUser());
  }

  const CustomAvatarDiv = (): JSX.Element => {
    if (userIsLoggedIn) {
      return (
        <div style={{ textAlign: 'center' }}>
          <CustomAvatar />
          <Button
            variant="contained"
            onClick={logout}
            size="large"
            color="secondary"
            style={{ width: '200px', placeSelf: 'center' }}
          >
            Sair
            </Button>
          {userIsAdmin ? <span style={{ padding: '20px' }}>Administrador</span> : null}
        </div >
      )
    }
    return null
  }

  const drawer = (
    <div >

      <div className={classes.drawerHeader}>
        <img src="https://i.ibb.co/B2XpXDB/Logo-3-1.png" alt="Setores-Foxter-PADRA-O" style={{ width: '120px', }} />
      </div>

      <Divider />

      <CustomAvatarDiv />

      <List>
        <Link href="/" passHref >
          <StyledA onClick={() => dispatch(setToogleDrawer(false))}>
            <ListItem >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Página Inicial" />
            </ListItem>
          </StyledA>
        </Link>

        <Link href="/novo-contrato" passHref >
          <StyledA onClick={() => dispatch(setToogleDrawer(false))}>
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

      <AppBar position="fixed" className={classes.appBar} style={userIsLoggedIn ? null : { display: 'none' }}>
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

          
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders" style={userIsLoggedIn ? null : { display: 'none' }}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css" >

          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={toogleDrawer}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            style={userIsLoggedIn ? null : { display: 'none' }}
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
      <main className={classes.contentWrapper} >
        <div className={classes.content}>
          <div className={classes.toolbar} />
          {props.children}
        </div>
      </main>
    </div>
  );
}
export default CustomDrawer
