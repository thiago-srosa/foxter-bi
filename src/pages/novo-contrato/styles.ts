//MATERIAL-UI
import { makeStyles } from '@material-ui/core/styles';
//STYLED-COMPONETS
import styled from 'styled-components'

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& .MuiTextField-root': {
      width: '125',
      [theme.breakpoints.between('xs', 'md')]: {
        width: '100%',
      },
      [theme.breakpoints.between('md', 'xl')]: {
        width: '50%',
      },
    },
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '50%',
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  form: {
    width: '100%',
    '& > *': {      
      width: '100%',
    },
  },
  outlinedInputSmall: {
    width: '200px',
  },
  formControl: {
    margin: theme.spacing(1),
    width: 200,
  },
}));

export const SectionDiv = styled.div`  
  
`