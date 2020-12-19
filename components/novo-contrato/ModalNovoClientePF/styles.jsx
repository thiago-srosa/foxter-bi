//Import Material UI Icons
import { makeStyles } from '@material-ui/core/styles';

//Import styled-components
import styled from 'styled-components'

export const ButtonsContainer = styled.div`
display: flex;  
justify-content: space-around;
padding-top: 10px;
@media(max-width: 600px) {
  display: block;    
};
`

export const AutoCompleteContainer = styled.div`
  display: flex;  
  @media(max-width: 600px) {
    display: block;   
  };
`

export const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    overflow: 'auto',
    overflowX: 'hidden',
    width: '800px',
    height: 'auto',
    maxWidth: '90%',
    maxHeight: '90%',
    backgroundColor: theme.palette.background.paper,
    border: '0px solid #f1f1f1',
    boxShadow: theme.shadows[5],
    padding: '20px',
    outline: 'none',
    top: '50% ',
    left: '50% ',
    transform: 'translate(-50%, -50%) ',
  },
  root: {
    marginTop: '5px',
    marginBottom: '5px',
  },
  textField: {
    marginTop: '10px',
    marginBottom: '0px',
  },
  inputModal50percentLEFT: {
    width: '50%',
    paddingRight: '15px',
    marginTop: '10px',
    [theme.breakpoints.down('600')]: {
      width: '100%',
      display: 'block',
      paddingRight: '0px',
      marginTop: '10px',
    },
  },
  inputModal50percentRIGHT: {
    width: '50%',
    marginTop: '10px',
    marginBottom: '0px',
    [theme.breakpoints.down('600')]: {
      width: '100%',
      display: 'block',
      marginTop: '10px',
    },
  },
  buttonLEFT: {
    width: 'auto',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginBottom: 5,
    }
  },
  buttonRIGHT: {
    width: 'auto',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginTop: 5,
    }
  }
}));