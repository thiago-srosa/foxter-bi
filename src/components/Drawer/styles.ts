//MATERIAL-UI
import {
  makeStyles,
  createStyles,
  Theme
} from '@material-ui/core/styles';

const drawerWidth = 280;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
      height: 64,
      paddingTop: 5,
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
    contentWrapper: {      
      display: 'block',
      width: 800,
      margin: 'auto',
      paddingTop: 30,
    },

    content: {
      display: 'flex',
      flexWrap: 'wrap',
      flexGrow: 1,
      padding: theme.spacing(3),
      backgroundColor: 'white',
      margin: 'auto',
    },
    drawerHeader: {
      height: 64,
      backgroundColor: '#3f51b5',
      display: 'flex',
      alignItems: 'center',
      //padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      justifyContent: 'center',
    },
    avatarDiv: {
      display: 'flex',
      paddingTop: '15px',
      justifyContent: 'center',

      '& > *': {
        display: 'block',
        margin: theme.spacing(1),
      },
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }),
);

export default useStyles;