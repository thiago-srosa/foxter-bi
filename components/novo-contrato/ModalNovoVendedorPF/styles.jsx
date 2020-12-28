//Import Material UI Icons
import { makeStyles } from '@material-ui/core/styles';

//Import styled-components
import styled from 'styled-components'

export const ButtonsContainer = styled.div`
display: flex;  
justify-content: space-around;
padding: 20px;
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

export const HeaderContainer = styled.div`
  display: flex; 
  background-color: white;
  height: 50px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1;
  text-align: center;

`

export const H2 = styled.h2`
  padding: 10px 0 10px 10px;
  margin: 0px;
  flex-grow: 1;
`

export const CloseIconContainer = styled.div`
  text-align: right;
  width: 50;
  padding: 8px;
  cursor: pointer;
`

export const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    overflow: 'auto',
    overflowX: 'hidden',
    width: '800px',
    height: 'auto',
    maxWidth: '95%',
    maxHeight: '97%',
    backgroundColor: theme.palette.background.paper,
    border: '0px solid #f1f1f1',
    boxShadow: theme.shadows[5],
    padding: '0px',
    outline: 'none',
    top: '50% ',
    left: '50% ',  
    transform: 'translate(-50%, -50%) ',
  },
  root: {
    marginTop: '5px',
    marginBottom: '5px',
    padding: '20px',
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