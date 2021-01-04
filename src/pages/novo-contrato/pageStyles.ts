//Import Material UI
import { makeStyles } from '@material-ui/core/styles';

//Import styled-components
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
}));

export const SectionDiv = styled.div`
  background-color: white;
  padding: 20px;
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
  border-radius: 5px;
`