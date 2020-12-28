import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'

export const StyledA = styled.a`
  text-Decoration: none ;
  cursor : pointer;`

const drawerWidth = 280;

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  drawerHeader: {
    height: 64,
    backgroundColor: '#3f51b5',
    display: 'flex',
    alignItems: 'center',
    //padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    justifyContent: 'center',
  }
}));


/*
export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor: '#009be5',
    height: 56,
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,

  },
  menuButton: {

  },
  toolbar: theme.mixins.toolbar,
  toolbar: {
    maxHeight: '56px !important',
    minHeight: '56px !important',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 1,

  },
  drawerPaper: {
    width: drawerWidth,

  },
  drawerHeader: {
    height: 56,
    backgroundColor: '#009be5',
    display: 'flex',
    alignItems: 'center',
    //padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    justifyContent: 'flex-end',
  },
  content: {
    backgroundColor: '#009be5',
    display: 'flex',
    height: '100vh',
    paddingTop: 64,
    flexGrow: 1,

    marginLeft: -drawerWidth,
  },
  contentShift: {
    marginLeft: 0,
  },
  container: {
    width: '100vw',
  }
}));*/