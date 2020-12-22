import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'

export const StyledA = styled.a`
  text-Decoration: none ;
  cursor : pointer;
`

export const StyledGoogleLoginContainer = styled.div`
  padding-top: 20px;
  height: 100px;
  text-align: -webkit-center;
`

export const StyledLogoutButton = styled.div`
  text-align: -webkit-center;
  padding-top: 15px;
  & * {
    width: 80px;
    padding: 10px;
    background-color : #4286f4;
    border: 1px;
    color: white;
    font-size: 15px;
    font-weight: 700;
    cursor : pointer;
  }  
`

const drawerWidth = 280;

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor: '#4286f4',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
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
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    width: '100%',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));